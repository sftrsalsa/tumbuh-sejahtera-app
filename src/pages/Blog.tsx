
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, User, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useToast } from "@/hooks/use-toast";

const Blog = () => {
  const { toast } = useToast();

  const blogPosts = [
    {
      id: 1,
      title: 'Tips Menanam Nanas Gati di Musim Hujan',
      excerpt: 'Musim hujan bukan halangan untuk budidaya nanas gati. Simak tips dan triknya di sini...',
      content: `
        Budidaya nanas gati di musim hujan memerlukan perhatian khusus untuk menjaga kualitas dan hasil panen. Berikut adalah tips lengkapnya:

        **1. Persiapan Lahan**
        - Pastikan drainase lahan baik untuk menghindari genangan air
        - Buat bedengan dengan ketinggian 30-40 cm
        - Gunakan mulsa plastik untuk melindungi tanaman

        **2. Pemilihan Bibit**
        - Pilih bibit yang sehat dan bebas penyakit
        - Pastikan bibit sudah berumur 12-15 bulan
        - Rendam bibit dalam fungisida sebelum tanam

        **3. Perawatan Khusus**
        - Kurangi frekuensi penyiraman karena curah hujan tinggi
        - Lakukan penyemprotan fungisida rutin setiap 2 minggu
        - Pasang atap plastik jika hujan terlalu deras

        **4. Pemupukan**
        - Gunakan pupuk slow release untuk menghindari pencucian
        - Aplikasikan pupuk organik sebelum musim hujan
        - Monitor kondisi tanaman secara berkala
      `,
      image: '/lovable-uploads/c62d382b-9962-490e-a225-3a092ca53b0b.png',
      author: 'Pak Sutrisno',
      date: '2024-01-15',
      category: 'Tips Budidaya',
      views: 245
    },
    {
      id: 2,
      title: 'Inovasi Terbaru: Talas Organik Sukaharja Raih Sertifikat',
      excerpt: 'Kabar gembira dari Desa Sukaharja! Produk talas organik kami berhasil meraih sertifikat organik nasional...',
      content: `
        Desa Sukaharja kembali mencatatkan prestasi membanggakan dengan meraih sertifikat organik untuk produk talas unggulan.

        **Pencapaian Bersejarah**
        Setelah melalui proses audit yang ketat selama 6 bulan, produk talas Sukaharja akhirnya mendapat pengakuan sebagai produk organik bersertifikat. Ini merupakan pencapaian bersejarah bagi para petani desa.

        **Dampak Positif**
        - Harga jual meningkat 40-50%
        - Akses pasar yang lebih luas
        - Kepercayaan konsumen meningkat
        - Motivasi petani untuk terus berinovasi

        **Proses Sertifikasi**
        Tim auditor melakukan pemeriksaan menyeluruh terhadap:
        - Teknik budidaya bebas pestisida
        - Penggunaan pupuk organik
        - Sistem dokumentasi yang baik
        - Traceability produk dari hulu ke hilir

        **Rencana Ke Depan**
        Dengan pencapaian ini, Desa Sukaharja berencana mengajukan sertifikasi untuk produk unggulan lainnya seperti nanas gati dan tanaman hias.
      `,
      image: '/lovable-uploads/72c90817-7ea1-4677-a40f-66265cea474c.png',
      author: 'Redaksi',
      date: '2024-01-10',
      category: 'Berita',
      views: 389
    },
    {
      id: 3,
      title: 'Perawatan Tanaman Hias: Panduan Lengkap untuk Pemula',
      excerpt: 'Baru mulai hobi tanaman hias? Jangan khawatir! Panduan lengkap ini akan membantu Anda merawat tanaman dengan benar...',
      content: `
        Hobi tanaman hias semakin populer, terutama setelah pandemi. Banyak orang mulai tertarik mengoleksi tanaman untuk mempercantik rumah.

        **Langkah Awal**
        - Pilih tanaman yang mudah dirawat seperti Sansevieria atau Pothos
        - Pastikan lokasi memiliki cahaya yang cukup
        - Siapkan pot dengan drainase yang baik

        **Tips Penyiraman**
        - Cek kelembaban tanah dengan jari
        - Siram saat tanah terasa kering
        - Hindari penyiraman berlebihan
        - Gunakan air yang sudah didiamkan semalam

        **Pencahayaan**
        - Tanaman daun umumnya suka cahaya tidak langsung
        - Rotasi pot seminggu sekali
        - Perhatikan tanda-tanda kekurangan cahaya

        **Pemupukan**
        - Gunakan pupuk cair sebulan sekali
        - Kurangi pemupukan saat musim kemarau
        - Pilih pupuk sesuai jenis tanaman

        **Troubleshooting**
        - Daun kuning: kelebihan air atau kekurangan nutrisi
        - Daun layu: kekurangan air atau terlalu panas
        - Pertumbuhan lambat: kurang cahaya atau nutrisi
      `,
      image: '/lovable-uploads/9cdce8d7-fc10-4455-9822-c33b8810e7e4.png',
      author: 'Bu Sari',
      date: '2024-01-08',
      category: 'Tutorial',
      views: 156
    },
    {
      id: 4,
      title: 'Digitalisasi Desa: Sukaharja Menuju Era 4.0',
      excerpt: 'Perjalanan transformasi digital Desa Sukaharja dari desa tradisional menjadi desa digital yang modern...',
      content: `
        Desa Sukaharja tengah mengalami transformasi besar-besaran menuju era digital. Perubahan ini tidak terjadi dalam semalam, melainkan melalui proses yang terencana dan bertahap.

        **Langkah Awal Digitalisasi**
        - Pembentukan tim IT desa
        - Pelatihan digital untuk petani
        - Pengembangan website desa
        - Implementasi sistem informasi desa

        **Platform Digital yang Dikembangkan**
        - E-commerce produk pertanian
        - Sistem manajemen inventori
        - Aplikasi konsultasi pertanian
        - Portal informasi desa

        **Dampak Positif**
        - Peningkatan penjualan 60%
        - Jangkauan pasar lebih luas
        - Efisiensi operasional meningkat
        - Transparansi pemerintahan desa

        **Tantangan yang Dihadapi**
        - Keterbatasan infrastruktur internet
        - Resistensi dari sebagian petani senior
        - Kebutuhan pelatihan berkelanjutan
        - Investasi teknologi yang cukup besar

        **Rencana Masa Depan**
        - Implementasi IoT untuk pertanian
        - Pengembangan AI untuk prediksi cuaca
        - Sistem blockchain untuk traceability
        - Integrasi dengan platform e-commerce nasional
      `,
      image: '/lovable-uploads/5156a629-12f0-43f1-a5ae-0d4b48acdfed.png',
      author: 'Tim IT Desa',
      date: '2024-01-05',
      category: 'Teknologi',
      views: 298
    }
  ];

  const categories = ['Semua', 'Tips Budidaya', 'Berita', 'Tutorial', 'Teknologi'];

  const handleReadMore = (postId: number, title: string) => {
    toast({
      title: "Artikel Dibuka",
      description: `Membaca artikel: ${title}`,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100">
      {/* Header */}
      <header className="bg-white shadow-lg border-b-4 border-green-500">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center space-x-4">
            <Link to="/">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Kembali
              </Button>
            </Link>
            <h1 className="text-2xl font-bold text-green-800">Blog & Artikel</h1>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-green-600 to-green-700 text-white rounded-lg p-8 mb-8">
          <h2 className="text-3xl font-bold mb-4">Informasi & Tips Pertanian Terkini</h2>
          <p className="text-lg">Dapatkan wawasan, tips, dan berita terbaru seputar dunia pertanian dan produk Desa Sukaharja</p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-3 mb-8">
          {categories.map((category) => (
            <Button
              key={category}
              variant="outline"
              className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Blog Posts */}
        <div className="grid lg:grid-cols-2 gap-8">
          {blogPosts.map((post) => (
            <Card key={post.id} className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <div className="relative overflow-hidden rounded-t-lg">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <Badge className="absolute top-3 right-3 bg-green-600">
                  {post.category}
                </Badge>
              </div>
              <CardContent className="p-6">
                <h3 className="font-bold text-xl text-green-800 mb-2">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                
                <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-1" />
                    {post.author}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {new Date(post.date).toLocaleDateString('id-ID')}
                  </div>
                  <div className="flex items-center">
                    <Eye className="h-4 w-4 mr-1" />
                    {post.views} views
                  </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg mb-4 max-h-48 overflow-y-auto">
                  <pre className="text-sm text-gray-700 whitespace-pre-wrap font-sans">
                    {post.content}
                  </pre>
                </div>

                <Button 
                  className="w-full bg-green-600 hover:bg-green-700"
                  onClick={() => handleReadMore(post.id, post.title)}
                >
                  Baca Selengkapnya
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Newsletter Subscription */}
        <div className="mt-12 bg-white rounded-lg shadow-lg p-8">
          <h3 className="text-2xl font-bold text-green-800 mb-4 text-center">Berlangganan Newsletter</h3>
          <p className="text-gray-600 text-center mb-6">Dapatkan artikel terbaru dan tips pertanian langsung di email Anda</p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Masukkan email Anda"
              className="flex-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <Button className="bg-green-600 hover:bg-green-700">
              Berlangganan
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
