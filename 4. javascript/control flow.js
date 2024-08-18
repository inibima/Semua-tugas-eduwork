// Fungsi untuk mengkonversi nilai angka menjadi huruf
function convertGrade(score) {
    if (score >= 90 && score <= 100) {
        return 'A';
    } else if (score >= 80 && score < 90) {
        return 'B';
    } else if (score >= 70 && score < 80) {
        return 'C';
    } else if (score >= 60 && score < 70) {
        return 'D';
    } else if (score >= 0 && score < 60) {
        return 'F';
    } else {
        return 'Invalid score';
    }
}

// Contoh nilai untuk dikonversi
const scores = [95, 82, 74, 61, 45, 101, -5];

// Mengkonversi setiap nilai dalam array dan menampilkannya
scores.forEach(score => {
    console.log(`Nilai ${score} dikonversi menjadi: ${convertGrade(score)}`);
});