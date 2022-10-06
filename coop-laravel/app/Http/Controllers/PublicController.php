<?php

namespace App\Http\Controllers;

use App\Http\Requests\CvRequest;
use App\Mail\CvMail;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Storage;

class PublicController extends Controller
{
    public function submit(CvRequest $request){
       
        $firstName = $request->firstName;
        $lastName = $request->lastName;
        $email = $request->email;
        $phone = $request->phone;
        $cv = $request->file('cv')->store('public/cv');

        $user_contact = compact('firstName', 'lastName', 'email', 'phone', 'cv');

        Mail::to($email)->send(new CvMail($user_contact));

        Storage::delete($cv);

        return response()->json([
            "status" => "ok"
        ]);
    }
}
