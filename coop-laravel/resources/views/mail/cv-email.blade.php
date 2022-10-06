<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mail</title>
</head>

<body style="margin: 30px;">
    <h1>Dear HR Department,</h1>
    <h2>We received a new curriculum vitae for Coop. You can find it between the attachments</h2>
    <h3>Contact details:</h3>
    <div style="display:flex;">
        <ul style="list-style: none; font-size: 1.3rem;">
            <li style=""><b>Name :</b></li>
            <li><b>Email :</b></li>
            <li><b>Phone :</b></li>
        </ul>
        <ul style="list-style: none; font-size: 1.3rem;">
            <li>{{$user_contact['firstName']}} {{$user_contact['lastName']}}</li>
            <li>{{$user_contact['email']}}</li>
            <li>{{$user_contact['phone']}}</li>
        </ul>
    </div>
</body>

</html>