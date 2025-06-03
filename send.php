<?php
// Telegram Bot Config
$bot_token = "YOUR_BOT_TOKEN";
$chat_id = "YOUR_GROUP_CHAT_ID"; // group ID (with -100...)

// Collect data
$name = $_POST['name'] ?? '';
$email = $_POST['email'] ?? '';
$message = $_POST['message'] ?? '';

$txt = "📥 <b>New Contact Form Message</b>\n";
$txt .= "👤 Name: $name\n";
$txt .= "📧 Email: $email\n";
$txt .= "💬 Message:\n$message";

$url = "https://api.telegram.org/bot$bot_token/sendMessage";

$send = fopen("$url?chat_id=$chat_id&text=" . urlencode($txt) . "&parse_mode=HTML", "r");
