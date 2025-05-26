
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, BookOpen, Video, FileText, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useToast } from "@/hooks/use-toast";
import { useState } from 'react';

const Education = () => {
  const { toast } = useToast();
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const educationalContent = [
    {
      title: 'Cara Menanam Nanas Gati',
      description: 'Panduan lengkap budidaya nanas gati dari persiapan lahan hingga panen',
      type: 'Artikel',
      image: '/lovable-uploads/c62d382b-9962-490e-a225-3a092ca53b0b.png',
      duration: '10 menit baca',
      icon: FileText,
      category: 'artikel',
      content: `
        Nanas Gati merupakan varietas unggul yang mudah dibudidayakan. Berikut langkah-langkahnya:
        
        1. **Persiapan Lahan**
        - Pilih lahan dengan drainase baik
        - pH tanah ideal 5.5-6.5
        - Bersihkan dari gulma
        
        2. **Penanaman**
        - Jarak tanam 30x60 cm
        - Tanam pada musim hujan
        - Kedalaman lubang 15-20 cm
        
        3. **Perawatan**
        - Penyiraman rutin
        - Pemupukan setiap 3 bulan
        - Pengendalian hama
        
        4. **Panen**
        - Umur panen 15-18 bulan
        - Ciri buah matang: warna kuning keemasan
      `
    },
    {
      title: 'Budidaya Talas Organik',
      description: 'Teknik budidaya talas ramah lingkungan untuk hasil maksimal',
      type: 'Video',
      image: '/lovable-uploads/72c90817-7ea1-4677-a40f-66265cea474c.png',
      duration: '15 menit',
      icon: Video,
      category: 'video',
      content: `
        Budidaya talas organik semakin diminati karena ramah lingkungan:
        
        **Keunggulan Talas Organik:**
        - Bebas pestisida kimia
        - Nutrisi lebih tinggi
        - Harga jual lebih baik
        
        **Langkah Budidaya:**
        1. Pilih bibit berkualitas
        2. Gunakan pupuk kompos
        3. Pengendalian hama alami
        4. Rotasi tanaman
        
        **Tips Sukses:**
        - Monitoring rutin
        - Dokumentasi proses
        - Sertifikasi organik
      `
    },
    {
      title: 'Merawat Tanaman Hias Indoor',
      description: 'Tips merawat tanaman hias di dalam ruangan agar tetap sehat dan indah',
      type: 'Panduan',
      image: '/lovable-uploads/9cdce8d7-fc10-4455-9822-c33b8810e7e4.png',
      duration: '8 menit baca',
      icon: BookOpen,
      category: 'panduan',
      content: `
        Tanaman hias indoor membutuhkan perawatan khusus:
        
        **Pencahayaan:**
        - Tempatkan di dekat jendela
        - Hindari sinar matahari langsung
        - Rotasi pot seminggu sekali
        
        **Penyiraman:**
        - Cek kelembaban tanah
        - Siram pagi atau sore
        - Jangan sampai tergenang
        
        **Pupuk:**
        - Pupuk cair sebulan sekali
        - Kurangi pupuk saat musim dingin
        - Perhatikan dosis yang tepat
        
        **Pemangkasan:**
        - Buang daun layu/mati
        - Pangkas untuk bentuk
        - Gunakan alat bersih
      `
    },
    {
      title: 'Teknologi Pertanian Modern',
      description: 'Pengenalan teknologi terbaru dalam dunia pertanian',
      type: 'Webinar',
      image: '/lovable-uploads/5156a629-12f0-43f1-a5ae-0d4b48acdfed.png',
      duration: '45 menit',
      icon: Users,
      category: 'webinar',
      content: `
        Teknologi modern mengubah wajah pertanian:
        
        **Internet of Things (IoT):**
        - Sensor kelembaban tanah
        - Monitoring cuaca otomatis
        - Irigasi cerdas
        
        **Drone Pertanian:**
        - Pemetaan lahan
        - Penyemprotan presisi
        - Monitoring tanaman
        
        **Hidroponik:**
        - Hemat air dan lahan
        - Kontrol nutrisi optimal
        - Hasil panen konsisten
        
        **Aplikasi Mobile:**
        - Identifikasi hama penyakit
        - Konsultasi ahli online
        - Marketplace produk
      `
    }
  ];

  const categories = [
    { key: 'all', label: 'Semua', icon: FileText, color: 'bg-gray-600 hover:bg-gray-700' },
    { key: 'artikel', label: 'Artikel', icon: FileText, color: 'bg-blue-600 hover:bg-blue-700' },
    { key: 'video', label: 'Video', icon: Video, color: 'bg-red-600 hover:bg-red-700' },
    { key: 'panduan', label: 'Panduan', icon: BookOpen, color: 'bg-yellow-600 hover:bg-yellow-700' },
    { key: 'webinar', label: 'Webinar', icon: Users, color: 'bg-purple-600 hover:bg-purple-700' }
  ];

  const filteredContent = activeFilter === 'all' 
    ? educationalContent 
    : educationalContent.filter(content => content.category === activeFilter);

  const handleContentClick = (title: string) => {
    toast({
      title: "Konten Dibuka",
      description: `Membuka konten: ${title}`,
    });
  };

  const handleFilterClick = (category: string) => {
    setActiveFilter(category);
    toast({
      title: "Filter Diubah",
      description: `Menampilkan konten: ${categories.find(c => c.key === category)?.label}`,
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
            <h1 className="text-2xl font-bold text-green-800">Konten Edukatif</h1>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-green-600 to-green-700 text-white rounded-lg p-8 mb-8">
          <h2 className="text-3xl font-bold mb-4">Pusat Pembelajaran Pertanian</h2>
          <p className="text-lg">Tingkatkan pengetahuan pertanian Anda dengan konten edukatif berkualitas dari para ahli</p>
        </div>

        {/* Content Categories */}
        <div className="grid md:grid-cols-5 gap-4 mb-8">
          {categories.map((category) => (
            <Button 
              key={category.key}
              className={`${category.color} p-4 h-auto flex flex-col ${
                activeFilter === category.key ? 'ring-4 ring-green-300' : ''
              }`}
              onClick={() => handleFilterClick(category.key)}
            >
              <category.icon className="h-6 w-6 mb-2" />
              <span>{category.label}</span>
            </Button>
          ))}
        </div>

        {/* Educational Content */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {filteredContent.map((content, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <div className="relative overflow-hidden rounded-t-lg">
                <img 
                  src={content.image} 
                  alt={content.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-3 right-3 bg-green-600 text-white px-3 py-1 rounded-full text-sm flex items-center">
                  <content.icon className="h-4 w-4 mr-1" />
                  {content.type}
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg text-green-800 mb-2">{content.title}</h3>
                <p className="text-gray-600 mb-4">{content.description}</p>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm text-gray-500">Durasi: {content.duration}</span>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg mb-4 max-h-48 overflow-y-auto">
                  <pre className="text-sm text-gray-700 whitespace-pre-wrap font-sans">
                    {content.content}
                  </pre>
                </div>
                <Button 
                  className="w-full bg-green-600 hover:bg-green-700"
                  onClick={() => handleContentClick(content.title)}
                >
                  Baca Selengkapnya
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Learning Path */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h3 className="text-2xl font-bold text-green-800 mb-6 text-center">Jalur Pembelajaran Terstruktur</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">1</span>
              </div>
              <h4 className="font-semibold text-green-800 mb-2">Pemula</h4>
              <p className="text-gray-600">Dasar-dasar pertanian dan perkebunan</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">2</span>
              </div>
              <h4 className="font-semibold text-green-800 mb-2">Menengah</h4>
              <p className="text-gray-600">Teknik budidaya dan manajemen</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">3</span>
              </div>
              <h4 className="font-semibold text-green-800 mb-2">Lanjutan</h4>
              <p className="text-gray-600">Teknologi modern dan bisnis pertanian</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
