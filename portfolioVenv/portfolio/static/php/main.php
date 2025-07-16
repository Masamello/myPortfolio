<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $name = isset($_POST['name']) ? trim($_POST['name']) : '';
    $email = isset($_POST['email']) ? trim($_POST['email']) : '';
    $message = isset($_POST['message']) ? trim($_POST['message']) : '';

    // 簡単なバリデーション
    if ($name && $email && filter_var($email, FILTER_VALIDATE_EMAIL) && $message) {
        $to = "kojimasa1205@gmail.com";
        $subject = "【ポートフォリオ】お問い合わせフォーム";
        $body = "お名前: $name\nメールアドレス: $email\n\nメッセージ:\n$message";
        $headers = "From: $email\r\nReply-To: $email\r\n";

        if (mail($to, $subject, $body, $headers)) {
            echo "<script>alert('送信が完了しました。ありがとうございました！');window.history.back();</script>";
            exit;
        } else {
            echo "<script>alert('送信に失敗しました。時間をおいて再度お試しください。');window.history.back();</script>";
            exit;
        }
    } else {
        echo "<script>alert('すべての項目を正しく入力してください。');window.history.back();</script>";
        exit;
    }
}
?>
