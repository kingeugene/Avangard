<?php
    $msg_box = ""; 
    $errors = array(); 

    if($_POST['user_name'] == "")    $errors[] = "Поле 'Ваше имя' не заполнено!";
    if($_POST['user_email'] == "")   $errors[] = "Поле 'Ваш e-mail' не заполнено!";
    if($_POST['text_comment'] == "") $errors[] = "Поле 'Текст сообщения' не заполнено!";
 

    if(empty($errors)){     
 
        $message  = "Имя пользователя: " . $_POST['user_name'] . "<br/>";
        $message .= "E-mail пользователя: " . $_POST['user_email'] . "<br/>";
        $message .= "Текст письма: " . $_POST['text_comment'];      
        send_mail($message); 

        $msg_box = "<span style='color: green;'>Сообщение успешно отправлено!</span>";
    }else{

        $msg_box = "";
        foreach($errors as $one_error){
            $msg_box .= "<span style='color: red;'>$one_error</span><br/>";
        }
    }
 

    echo json_encode(array(
        'result' => $msg_box
    ));
     
     
    // функция отправки письма
    function send_mail($message){

        $mail_to = "mail@gmail.com"; 

        $subject = "Письмо с обратной связи";
         

        $headers= "MIME-Version: 1.0\r\n";
        $headers .= "Content-type: text/html; charset=utf-8\r\n"; 
        $headers .= "From: Тестовое письмо <no-reply@test.com>\r\n"; 
         

        mail($mail_to, $subject, $message, $headers);
    }
     
?>