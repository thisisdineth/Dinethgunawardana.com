document.getElementById('downloadBtn').addEventListener('click', function() {
    const apkUrl = 'findaguest.apk'; // Replace with the path to your APK file
    const a = document.createElement('a');
    a.href = apkUrl;
    a.download = 'findaguest.apk'; // This will be the name of the downloaded file
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
});
