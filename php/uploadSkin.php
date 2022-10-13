<?php
$url = 'https://api.mineskin.org/generate/upload';
$fullFilePath = ".../skin.png"; //Full path to the file

if (function_exists('curl_file_create')) {
    $file = curl_file_create($fullFilePath);
} else {
    $file = '@' . realpath($fullFilePath);
}

$data = array('variant' => 'classic'      //Variant     :   classic / slim
            , 'name' => 'asdasd'          //Name        :   Skin name
            , 'visibility' => '0'         //Visibility  :   0 = public / 1 = private
            , 'file' => $file);           //File        :   Actual skin file

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
curl_exec($ch);
curl_close($ch);

?>