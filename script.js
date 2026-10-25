const materi = {
  1: {icon:"📘", title:"Konsep Ilmu Pendidikan Islam", text:"Pendidikan Islam adalah proses membimbing dan mengembangkan potensi manusia berdasarkan nilai-nilai Islam. Pembahasannya mencakup tujuan, peserta didik, pendidik, kurikulum, metode, lingkungan, dan evaluasi. Dalam matematika, nilai Islam dapat menjadi arah pembentukan sikap tanpa mengubah ketepatan konsep matematika."},
  2: {icon:"🌱", title:"Hakikat Manusia dan Fitrah", text:"Peserta didik memiliki potensi, pengalaman, kemampuan, dan kebutuhan belajar yang beragam. Guru perlu mengenali perbedaan tersebut, memberi kesempatan bertanya, menyediakan contoh bertahap, dan membangun suasana kelas yang aman agar siswa berani mencoba."},
  3: {icon:"🎯", title:"Tujuan dan Prinsip Pendidikan Islam", text:"Pembelajaran bertujuan mengembangkan pengetahuan, keterampilan berpikir, dan akhlak. Prinsip yang dapat diterapkan antara lain kejujuran, tanggung jawab, keadilan, ketekunan, dan menghargai proses. Pada matematika, siswa tidak hanya mengejar jawaban, tetapi juga menjelaskan langkahnya secara jujur."},
  4: {icon:"📖", title:"Landasan Pendidikan", text:"Al-Qur’an, hadis yang terverifikasi, dan pemikiran ulama dapat menjadi landasan nilai pendidikan. QS. Al-Baqarah [2]:164 mengajak manusia memperhatikan tanda-tanda pada penciptaan alam. Hubungannya dengan matematika adalah sebagai refleksi untuk mengamati pola dan keteraturan, bukan sebagai pengganti pembuktian matematis."},
  5: {icon:"🤝", title:"Peran Guru dan Peserta Didik", text:"Guru berperan sebagai fasilitator, pembimbing, motivator, dan teladan. Peserta didik aktif bertanya, berdiskusi, mencoba strategi, menghargai pendapat teman, serta merefleksikan hasil belajar. Interaksi yang baik dibangun melalui komunikasi santun dan saling menghormati."},
  6: {icon:"🧮", title:"Kurikulum dan Proses Pembelajaran", text:"Contoh penerapan untuk SMP/MTs: materi persentase. Tujuan belajar adalah menghitung persentase dan menjelaskan maknanya. Langkah kegiatan: pemantik masalah sehari-hari, penjelasan konsep, latihan berpasangan, pembahasan jawaban, lalu refleksi nilai kejujuran dan kepedulian. Tingkat kesulitan disesuaikan dengan kesiapan siswa."},
  7: {icon:"💻", title:"Metode, Media, dan Evaluasi", text:"Metode yang dapat digunakan antara lain Problem-Based Learning, Discovery Learning, dan Cooperative Learning. Media dapat berupa poster interaktif, video, lembar kerja, atau e-modul. Evaluasi dapat memadukan kuis, tugas, pengamatan proses, dan refleksi. Keterbatasan media digital meliputi akses perangkat dan internet."}
};

const cards = document.querySelectorAll(".topic-card");
const detailIcon = document.getElementById("detailIcon");
const detailNumber = document.getElementById("detailNumber");
const detailTitle = document.getElementById("detailTitle");
const detailText = document.getElementById("detailText");

cards.forEach(card => {
  card.addEventListener("click", () => {
    const id = card.dataset.topic;
    const item = materi[id];
    cards.forEach(c => c.classList.remove("active"));
    card.classList.add("active");
    detailIcon.textContent = item.icon;
    detailNumber.textContent = `SUB-CPMK ${id}`;
    detailTitle.textContent = item.title;
    detailText.textContent = item.text;
    document.getElementById("detailPanel").scrollIntoView({behavior:"smooth", block:"nearest"});
  });
});

document.getElementById("checkAnswer").addEventListener("click", () => {
  const selected = document.querySelector('input[name="answer"]:checked');
  const feedback = document.getElementById("feedback");
  feedback.className = "feedback";
  if (!selected) {
    feedback.textContent = "Pilih salah satu jawaban terlebih dahulu, ya.";
    feedback.classList.add("wrong");
    return;
  }
  if (selected.value === "b") {
    feedback.textContent = "Benar! 2,5% × Rp10.000.000 = Rp250.000. Hebat!";
    feedback.classList.add("correct");
  } else {
    feedback.textContent = "Belum tepat. Ingat, 2,5% = 0,025. Coba hitung lagi!";
    feedback.classList.add("wrong");
  }
});

document.getElementById("resetQuiz").addEventListener("click", () => {
  document.querySelectorAll('input[name="answer"]').forEach(input => input.checked = false);
  const feedback = document.getElementById("feedback");
  feedback.textContent = "";
  feedback.className = "feedback";
});
