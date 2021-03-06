type DoctorType = {
    id: number
    name: string
    title: string
    gender: string
    usia: string
    status: string
    keahlian: string
    speciality: string
    foto: string
}

const data: DoctorType[] = [
    {
        id: 1,
        name: 'Maria Rahmawati',
        title: 'S.Psi.',
        gender: 'F',
        usia: '20+',
        status: 'Belum berkeluarga',
        keahlian:
            'Sulit mengelola emosi, Khawatir akan masa depan, Sulit menerima masa lalu, Stress, Overthinking, Sering resah',
        speciality: 'Pengembangan Diri',
        foto: ''
    },
    {
        id: 2,
        name: 'Aslijan Tarihoran',
        title: 'S.Psi., M.M.',
        gender: 'M',
        usia: '30+',
        status: 'Belum berkeluarga',
        keahlian:
            'Sulit mengelola emosi, Khawatir akan masa depan, Pengembangan diri, Sulit menerima masa lalu, Stress, Overthinking, Sering resah, Grief/ berduka, Susah bersosialisasi, Belajar hal baru, Stress karena sekolah',
        speciality: 'Stress dan Kecemasan',
        foto: ''
    },
    {
        id: 3,
        name: 'Septi Nasyiah',
        title: 'S.Psi.',
        gender: 'F',
        usia: '20+',
        status: 'Belum berkeluarga',
        keahlian:
            'Bisnis, Academic stress, Masalah Asmara, Sulit mengelola emosi, Tekanan pekerjaan, Khawatir akan masa depan, Hubungan yang tidak sehat, Masalah pertemanan, Pengembangan diri, Manajemen Waktu, Sulit menerima masa lalu, Mengubah kebiasaan buruk',
        speciality: 'Pekerjaan dan Pendidikan',
        foto: ''
    },
    {
        id: 4,
        name: 'Elisa Halimah',
        title: 'S.Psi.',
        gender: 'F',
        usia: '20+',
        status: 'Belum berkeluarga',
        keahlian:
            'Kurang percaya diri, Kurang motivasi, Belajar hal baru, Mengubah kebiasaan buruk, Overthinking, Sering resah, Stress karena sekolah',
        speciality: 'Pengembangan Diri',
        foto: ''
    },
    {
        id: 5,
        name: 'Vino Suryono',
        title: 'S.Psi., M.Si.',
        gender: 'M',
        usia: '30+',
        status: 'Belum berkeluarga',
        keahlian:
            'Khawatir akan masa depan, Sulit menerima masa lalu, Sulit mengelola emosi, Stress, Tekanan pekerjaan, Konflik di tempat kerja, Lingkungan kerja yang kurang sehat',
        speciality: 'Stress dan Kecemasan',
        foto: ''
    },
    {
        id: 6,
        name: 'Nyoman Pradipta',
        title: 'S.Psi.',
        gender: 'M',
        usia: '20+',
        status: 'Belum berkeluarga',
        keahlian:
            'Khawatir akan masa depan, Sering resah/ galau, Masalah asmara, Masalah keluarga, Hubungan yang tidak sehat, Karakteristik LGBT, Seksualitas',
        speciality: 'Stress dan Kecemasan',
        foto: ''
    },
    {
        id: 7,
        name: 'Nyoman Pradipta',
        title: 'S.Psi.',
        gender: 'M',
        usia: '20+',
        status: 'Belum berkeluarga',
        keahlian:
            'Khawatir akan masa depan, Sering resah/ galau, Masalah asmara, Masalah keluarga, Hubungan yang tidak sehat, Karakteristik LGBT, Seksualitas',
        speciality: 'Seksualitas dan gender',
        foto: ''
    },
    {
        id: 8,
        name: 'Hadi Hutagalung',
        title: 'S.Psi.',
        gender: 'M',
        usia: '20+',
        status: 'Belum berkeluarga',
        keahlian:
            'Seksualitas, Karakteristik LGBT, Masalah asmara, Ketidakpuasan dalam hubungan, Masalah keluarga',
        speciality: 'Hubungan antar Manusia',
        foto: ''
    },
    {
        id: 9,
        name: 'Hadi Hutagalung',
        title: 'S.Psi.',
        gender: 'M',
        usia: '20+',
        status: 'Belum berkeluarga',
        keahlian:
            'Seksualitas, Karakteristik LGBT, Masalah asmara, Ketidakpuasan dalam hubungan, Masalah keluarga',
        speciality: 'Seksualitas dan gender',
        foto: ''
    },
    {
        id: 10,
        name: 'Irfan Kuswoyo',
        title: 'S.Psi.',
        gender: 'M',
        usia: '20+',
        status: 'Belum berkeluarga',
        keahlian:
            'Academic stress, Bisnis, Tekanan pekerjaan, Manajemen waktu, Mengubah kebiasaan buruk, Lingkungan kerja yang tidak sehat',
        speciality: 'Pekerjaan dan Pendidikan',
        foto: ''
    },
    {
        id: 11,
        name: 'Dian Kuswoyo',
        title: 'S.Psi., M.Si.',
        gender: 'F',
        usia: '30+',
        status: 'Sudah berkeluarga',
        keahlian:
            'Khawatir akan masa depan, Stress sekolah, Overthinking, Stress, Sulit menerima masa lalu',
        speciality: 'Stress dan Kecemasan',
        foto: ''
    },
    {
        id: 12,
        name: 'Lalita Permata',
        title: 'S.Psi.',
        gender: 'F',
        usia: '20+',
        status: 'Belum berkeluarga',
        keahlian:
            'Sering resah/ galau, Sulit mengelola emosi, Stress, Masalah keluarga, Hubungan tidak sehat, Masalah asmara',
        speciality: 'Stress dan Kecemasan',
        foto: ''
    },
    {
        id: 13,
        name: 'Lalita Permata',
        title: 'S.Psi.',
        gender: 'F',
        usia: '20+',
        status: 'Belum berkeluarga',
        keahlian:
            'Sering resah/ galau, Sulit mengelola emosi, Stress, Masalah keluarga, Hubungan tidak sehat, Masalah asmara',
        speciality: 'Hubungan antar Manusia',
        foto: ''
    },
    {
        id: 14,
        name: 'Juli Maryati Restu Pandara',
        title: 'S.Psi.',
        gender: 'F',
        usia: '25+',
        status: 'Belum berkeluarga',
        keahlian:
            'Tekanan pekerjaan, Konflik di tempat kerja, Academic stress, Bisnis, Manajemen waktu, Mengubah kebiasaan buruk, Khawatir akan masa depan',
        speciality: 'Pekerjaan dan Pendidikan',
        foto: ''
    },
    {
        id: 15,
        name: 'Juli Maryati Restu Pandara',
        title: 'S.Psi.',
        gender: 'F',
        usia: '25+',
        status: 'Belum berkeluarga',
        keahlian:
            'Tekanan pekerjaan, Konflik di tempat kerja, Academic stress, Bisnis, Manajemen waktu, Mengubah kebiasaan buruk, Khawatir akan masa depan',
        speciality: 'Stress dan Kecemasan',
        foto: ''
    },
    {
        id: 16,
        name: 'Agus Adriansyah',
        title: 'S.Psi.',
        gender: 'M',
        usia: '25+',
        status: 'Belum berkeluarga',
        keahlian:
            'Masalah pertemanan, Masalah keluarga, Hubungan tidak sehat, Seksualitas, Ketidakpuasan dalam hubungan',
        speciality: 'Hubungan antar Manusia',
        foto: ''
    },
    {
        id: 17,
        name: 'Darman Nababan',
        title: 'S.Psi.',
        gender: 'M',
        usia: '25+',
        status: 'Belum berkeluarga',
        keahlian: 'Karakteristik LGBT, Masalah pertemanan, Masalah keluarga',
        speciality: 'Seksualitas dan gender',
        foto: ''
    },
    {
        id: 18,
        name: 'Diana Puspita',
        title: 'S.Psi.',
        gender: 'F',
        usia: '20+',
        status: 'Belum berkeluarga',
        keahlian:
            'Tekanan pekerjaan, Konflik di tempat kerja, Stress, Seksualitas, Overthinking, Pengambilan keputusan, Belajar hal baru',
        speciality: 'Pekerjaan dan Pendidikan',
        foto: ''
    },
    {
        id: 19,
        name: 'Diana Puspita',
        title: 'S.Psi.',
        gender: 'F',
        usia: '20+',
        status: 'Belum berkeluarga',
        keahlian:
            'Tekanan pekerjaan, Konflik di tempat kerja, Stress, Seksualitas, Overthinking, Pengambilan keputusan, Belajar hal baru',
        speciality: 'Stress dan Kecemasan',
        foto: ''
    },
    {
        id: 20,
        name: 'Diana Puspita',
        title: 'S.Psi.',
        gender: 'F',
        usia: '20+',
        status: 'Belum berkeluarga',
        keahlian:
            'Tekanan pekerjaan, Konflik di tempat kerja, Stress, Seksualitas, Overthinking, Pengambilan keputusan, Belajar hal baru',
        speciality: 'Seksualitas dan gender',
        foto: ''
    },
    {
        id: 21,
        name: 'Vanesa Novitasari',
        title: 'S.Psi.',
        gender: 'F',
        usia: '20+',
        status: 'Belum berkeluarga',
        keahlian:
            'Belajar hal baru, Pengambilan keputusan, Susah bersosialisasi, Kurang percaya diri, Pengembangan diri',
        speciality: 'Pengembangan Diri',
        foto: ''
    },
    {
        id: 22,
        name: 'Putri Purnawati',
        title: 'S.Psi.',
        gender: 'F',
        usia: '25+',
        status: 'Belum berkeluarga',
        keahlian: 'Kurang motivasi, Overthinking, Stress, Grief/ berduka, Sering resah/ galau',
        speciality: 'Stress dan Kecemasan',
        foto: ''
    },
    {
        id: 23,
        name: 'Ratna Yulianti',
        title: 'S.Psi.',
        gender: 'F',
        usia: '25+',
        status: 'Belum berkeluarga',
        keahlian: 'Susah mencari pasangan, Susah move on, Pacaran beda agama, Stress, Overthinking',
        speciality: 'Hubungan antar Manusia',
        foto: ''
    },
    {
        id: 24,
        name: 'Citra Suryatmi',
        title: 'S.Psi.',
        gender: 'F',
        usia: '25+',
        status: 'Belum berkeluarga',
        keahlian:
            'Sulit menerima masa lalu, Grief/ berduka, Khawatir akan masa depan, Seksualitas, Pengambilan keputusan',
        speciality: 'Stress dan Kecemasan',
        foto: ''
    },
    {
        id: 25,
        name: 'Marwata Wijaya',
        title: 'S.Psi.',
        gender: 'M',
        usia: '25+',
        status: 'Sudah berkeluarga',
        keahlian:
            'Belajar hal baru, Kurang percara diri, Manajemen waktu, Kecemasan akan masa depan',
        speciality: 'Pengembangan Diri',
        foto: ''
    },
    {
        id: 26,
        name: 'Yono Mustofa',
        title: 'S.Psi.',
        gender: 'M',
        usia: '25+',
        status: 'Sudah berkeluarga',
        keahlian:
            'Minat dan karakter, Academic Stress, Bisnis, Masalah pertemanan, Masalah keluarga, Pengambilan keputusan',
        speciality: 'Pekerjaan dan Pendidikan',
        foto: ''
    },
    {
        id: 27,
        name: 'Yulia Novitasari',
        title: 'S.Psi.',
        gender: 'F',
        usia: '25+',
        status: 'Sudah berkeluarga',
        keahlian:
            'Ketidakpuasan dalam hubungan, Susah move on, Pacaran beda agama, Hubungan tidak sehat, Stress, Overthinking',
        speciality: 'Hubungan antar Manusia',
        foto: ''
    },
    {
        id: 28,
        name: 'Kurnia Waskita',
        title: 'S.Psi.',
        gender: 'F',
        usia: '20+',
        status: 'Belum berkeluarga',
        keahlian:
            'Sulit menerima masa lalu, Stress, Overhingking, Mengubah kebiasaan buruk, Susah bersosialisasi, Kurang motivasi',
        speciality: 'Stress dan Kecemasan',
        foto: ''
    },
    {
        id: 29,
        name: 'Caraka Pratama',
        title: 'S.Psi.',
        gender: 'M',
        usia: '20+',
        status: 'Belum berkeluarga',
        keahlian:
            'Belajar hal baru, Kurang motivasi, Kurang percaya diri, Susah bersosialisasi, Academic Stress, Masalah pertemanan',
        speciality: 'Pengembangan Diri',
        foto: ''
    },
    {
        id: 30,
        name: 'Caraka Pratama',
        title: 'S.Psi.',
        gender: 'M',
        usia: '20+',
        status: 'Belum berkeluarga',
        keahlian:
            'Belajar hal baru, Kurang motivasi, Kurang percaya diri, Susah bersosialisasi, Academic Stress, Masalah pertemanan',
        speciality: 'Pekerjaan dan Pendidikan',
        foto: ''
    },
    {
        id: 31,
        name: 'Kurnia Waskita',
        title: 'S.Psi.',
        gender: 'F',
        usia: '20+',
        status: 'Belum berkeluarga',
        keahlian:
            'Pengambilan keputusan, Mengubah kebiasaan buruk, Susah bersosialisasi, Overthinking, Sering resah/ galau',
        speciality: 'Stress dan Kecemasan',
        foto: ''
    }
]

export default data
