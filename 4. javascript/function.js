// Fungsi untuk memulai game tebak angka
function startGame() {
    let scorePlayer1 = 0;
    let scorePlayer2 = 0;
    let playAgain = true;

    while (playAgain) {
        // Angka acak yang harus ditebak (antara 1 dan 3)
        const randomNumber = Math.floor(Math.random() * 3) + 1;

        // Player 1 menebak
        let guessPlayer1 = parseInt(prompt("Player 1: Tebak angka dari 1 sampai 3:"));
        while (isNaN(guessPlayer1) || guessPlayer1 < 1 || guessPlayer1 > 3) {
            guessPlayer1 = parseInt(prompt("Input tidak valid. Player 1: Tebak angka dari 1 sampai 3:"));
        }

        // Player 2 menebak
        let guessPlayer2 = parseInt(prompt("Player 2: Tebak angka dari 1 sampai 3:"));
        while (isNaN(guessPlayer2) || guessPlayer2 < 1 || guessPlayer2 > 3) {
            guessPlayer2 = parseInt(prompt("Input tidak valid. Player 2: Tebak angka dari 1 sampai 3:"));
        }

        // Menentukan pemenang
        if (guessPlayer1 === randomNumber && guessPlayer2 === randomNumber) {
            alert(`Angka yang benar adalah ${randomNumber}. Keduanya menang!`);
            scorePlayer1++;
            scorePlayer2++;
        } else if (guessPlayer1 === randomNumber) {
            alert(`Angka yang benar adalah ${randomNumber}. Player 1 menang!`);
            scorePlayer1++;
        } else if (guessPlayer2 === randomNumber) {
            alert(`Angka yang benar adalah ${randomNumber}. Player 2 menang!`);
            scorePlayer2++;
        } else {
            alert(`Angka yang benar adalah ${randomNumber}. Tidak ada yang menang.`);
        }

        // Menampilkan skor
        alert(`Skor saat ini:\nPlayer 1: ${scorePlayer1}\nPlayer 2: ${scorePlayer2}`);

        // Tanya apakah ingin bermain lagi
        playAgain = confirm("Apakah ingin bermain lagi?");
    }

    // Menampilkan skor akhir
    alert(`Game selesai.\nSkor akhir:\nPlayer 1: ${scorePlayer1}\nPlayer 2: ${scorePlayer2}`);
}

// Memulai game
startGame();