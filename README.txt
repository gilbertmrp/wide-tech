Jelaskan mengapa bubble-sort memiliki kompleksitas algoritma O(n2) !

Jawaban : 
Bubble sort memiliki kompleksitas algoritma O(n^2) karena cara kerjanya yang melibatkan dua loop bersarang (nested loops). 
Loop luar bertugas untuk mengontrol jumlah pass, sementara loop dalam bertugas untuk melakukan perbandingan dan pertukaran elemen 
yang berdekatan.
Setiap elemen dalam array dibandingkan dengan elemen berikutnya, dan jika elemen tersebut lebih besar, maka pertukaran dilakukan. 
Proses ini dilakukan secara berulang untuk setiap elemen, sehingga membutuhkan iterasi sebanyak n-1 pada loop dalam.
n : Jumlah elemen atau data yang perlu di proses oleh algoritma
O(n^2) : Jumlah elemen yang harus diurutkan bertambah, jumlah langkah atau waktu yang dibutuhkan oleh algoritma akan bertambah
dengan cepat.
Oleh sebab itu kompleksitas waktu O(n^2) membuat sangat lambat untuk kumpulan data besar.