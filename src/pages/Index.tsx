
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, ShoppingCart, Book, MessageCircle, Map, Pencil, Images, Store } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const { toast } = useToast();
  const [activeSection, setActiveSection] = useState('home');

  const features = [
    {
      id: 'catalog',
      title: 'Katalog Produk',
      description: 'Menampilkan semua produk, lengkap dengan gambar dan deskripsi',
      icon: Store,
      color: 'bg-green-600',
      content: 'Jelajahi koleksi lengkap produk pertanian kami dengan kualitas terbaik.'
    },
    {
      id: 'featured',
      title: 'Komoditas Unggulan',
      description: 'Menampilkan produk andalan (best seller) yaitu nanas, talas dan tanaman hias',
      icon: Star,
      color: 'bg-green-700',
      content: 'Produk unggulan kami yang paling diminati pelanggan.'
    },
    {
      id: 'chat',
      title: 'Live Chat/Customer Service',
      description: 'Sebagai akses komunikasi dengan admin mengenai stok produk, cara pemesanan atau informasi yang dibutuhkan secara real time',
      icon: MessageCircle,
      color: 'bg-green-600',
      content: 'Hubungi tim customer service kami untuk bantuan langsung.'
    },
    {
      id: 'village',
      title: 'Mengenal Desa',
      description: 'Berisi informasi lengkap mengenai desa, mulai dari profil desa, visi dan misi desa, serta lokasi dan akses untuk menuju ke geografis (peta)',
      icon: Map,
      color: 'bg-green-700',
      content: 'Pelajari lebih dalam tentang desa kami dan komitmen terhadap pertanian berkelanjutan.'
    },
    {
      id: 'cart',
      title: 'Keranjang Belanja',
      description: 'Fitur untuk menampung produk yang akan dibeli',
      icon: ShoppingCart,
      color: 'bg-green-600',
      content: 'Kelola pembelian Anda dengan mudah melalui keranjang belanja.'
    },
    {
      id: 'education',
      title: 'Konten Edukatif',
      description: 'Berisi informasi dan edukasi seputar produk dan desa',
      icon: Book,
      color: 'bg-yellow-600',
      content: 'Dapatkan pengetahuan tentang pertanian dan produk-produk kami.'
    },
    {
      id: 'blog',
      title: 'Blog/Artikel',
      description: 'Bagian yang berisi tulisan informatif atau promosi seperti tips penggunaan produk, berita terbaru, atau ulasan',
      icon: Pencil,
      color: 'bg-green-600',
      content: 'Baca artikel menarik seputar pertanian dan tips bercocok tanam.'
    },
    {
      id: 'gallery',
      title: 'Galeri Desa',
      description: 'Bagian yang menampilkan wadah visual untuk dokumentasi kegiatan serta potensi desa',
      icon: Images,
      color: 'bg-yellow-500',
      content: 'Lihat dokumentasi visual kegiatan dan potensi desa kami.'
    }
  ];

  const featuredProducts = [
    {
      name: 'Nanas Gati Sukaharja',
      description: 'Nanas Gati adalah varietas nanas lokal Bogor yang terkenal dengan rasa manis segar dan sedikit asam. Daging buahnya renyah, berair, dan memiliki aroma khas yang menggugah selera.',
      image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=300&fit=crop',
      rating: 4.8,
      category: 'Buah',
      keunggulan: [
        'Dibudidayakan secara tradisional dengan perawatan optimal',
        'Ukuran buah sedang dengan mata yang tidak terlalu dalam',
        'Tahan lama dan cocok untuk jus, rujak, atau selai'
      ],
      manfaat: [
        'Kaya vitamin C untuk daya tahan tubuh',
        'Mengandung bromelain yang baik untuk pencernaan',
        'Antioksidan alami untuk kesehatan kulit'
      ],
      harga: 'Rp10.000–Rp20.000/buah (tergantung ukuran)'
    },
    {
      name: 'Talas Khas Sukaharja',
      description: 'Talas dari Desa Sukaharja dikenal sebagai salah satu komoditas unggulan dengan tekstur lembut dan rasa gurih alami. Talas ini cocok untuk diolah menjadi berbagai makanan tradisional seperti kolak, keripik, atau dodol talas.',
      image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400&h=300&fit=crop',
      rating: 4.6,
      category: 'Umbi',
      keunggulan: [
        'Ditanam secara organik dengan pupuk alami',
        'Umbi besar dan berkualitas tinggi',
        'Cocok untuk usaha kuliner atau dikonsumsi langsung'
      ],
      manfaat: [
        'Sumber karbohidrat sehat',
        'Mengandung serat tinggi untuk pencernaan',
        'Rendah kalori, baik untuk diet'
      ],
      harga: 'Rp15.000–Rp25.000/kg (tergantung musim dan ukuran)'
    },
    {
      name: 'Tanaman Hias Sukaharja',
      description: 'Desa Sukaharja menyediakan beragam tanaman hias berkualitas untuk mempercantik rumah, taman, atau ruang kerja.',
      image: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=400&h=300&fit=crop',
      rating: 4.9,
      category: 'Hias',
      keunggulan: [
        'Ditanam oleh petani lokal dengan perawatan optimal',
        'Harga terjangkau, kualitas terjamin',
        'Cocok untuk dekorasi rumah, hadiah, atau bisnis landscaping'
      ],
      jenis: {
        daun: ['Aglaonema (Sri Rejeki)', 'Lidah Mertua (Sansevieria)', 'Calathea', 'Monstera', 'Philodendron', 'Kuping Gajah (Anthurium)'],
        bunga: ['Anggrek Bulan', 'Kamboja Jepang (Adenium)', 'Bunga Krokot (Portulaca)', 'Bunga Peace Lily (Spathiphyllum)', 'Bunga Euphorbia'],
        gantung: ['Sirih Gading', 'Lidah Buaya Hias (Aloe Vera)', 'Pakis Hias', 'Bunga Lipstik (Aeschynanthus)']
      },
      harga: 'Mulai dari Rp15.000 (tanaman kecil) hingga Rp500.000 (tanaman besar/langka)'
    }
  ];

  const navigationItems = [
    { name: 'Katalog Produk', id: 'catalog' },
    { name: 'Komoditas Unggulan', id: 'featured' },
    { name: 'Kemitraan Belanja', id: 'partnership' },
    { name: 'Konten Edukatif', id: 'education' }
  ];

  const handleFeatureClick = (featureId: string) => {
    // Navigate to appropriate page based on feature
    const routeMap: { [key: string]: string } = {
      'catalog': '/catalog',
      'featured': '/featured',
      'chat': '/chat',
      'village': '/village',
      'cart': '/catalog',
      'education': '/education',
      'blog': '/blog',
      'gallery': '/gallery'
    };
    
    if (routeMap[featureId]) {
      window.location.href = routeMap[featureId];
    } else {
      setActiveSection(featureId);
      toast({
        title: "Fitur Aktif",
        description: `Menampilkan ${features.find(f => f.id === featureId)?.title}`,
      });
    }
  };

  const handleNavClick = (itemId: string) => {
    const routeMap: { [key: string]: string } = {
      'catalog': '/catalog',
      'featured': '/featured',
      'partnership': '/partnership',
      'education': '/education'
    };
    
    if (routeMap[itemId]) {
      window.location.href = routeMap[itemId];
    } else {
      setActiveSection(itemId);
      toast({
        title: "Navigasi",
        description: `Menampilkan ${navigationItems.find(n => n.id === itemId)?.name}`,
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100">
      {/* Header */}
      <header className="bg-white shadow-lg border-b-4 border-green-500">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-green-600 p-3 rounded-full">
                <Store className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-green-800">Suka Belanja di Harja</h1>
                <p className="text-green-600 text-sm">Desa Sukaharja Digital Panen Produk Klik Sekejap</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-6">
              {navigationItems.map((item) => (
                <Button
                  key={item.id}
                  variant="ghost"
                  className="text-green-700 hover:text-green-900 hover:bg-green-100"
                  onClick={() => handleNavClick(item.id)}
                >
                  {item.name}
                </Button>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section with Village Background */}
      <section 
        className="relative bg-gradient-to-r from-green-700/90 via-green-600/90 to-green-500/90 text-white py-20"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1501854140801-50d01698950b?w=1200&h=600&fit=crop")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'overlay'
        }}
      >
        <div className="absolute inset-0 bg-green-800/60"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl font-bold mb-6 leading-tight">
              DESA SUKAHARJA
              <span className="block text-yellow-300 text-3xl mt-2">DIGITAL PANEN PRODUK KLIK SEKEJAP</span>
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Button 
                size="lg" 
                className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-3"
                onClick={() => handleNavClick('catalog')}
              >
                Katalog Produk
              </Button>
              <Button 
                size="lg" 
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-3"
                onClick={() => handleNavClick('featured')}
              >
                Komoditas Unggulan
              </Button>
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
                onClick={() => handleNavClick('partnership')}
              >
                Kemitraan Belanja
              </Button>
              <Button 
                size="lg" 
                className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3"
                onClick={() => handleNavClick('education')}
              >
                Konten Edukatif
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Village Information Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-green-800 mb-4">Mengenal Desa Kami</h3>
            <p className="text-green-600 max-w-2xl mx-auto">
              Desa Sukaharja adalah desa yang kaya akan hasil pertanian dan berkomitmen pada digitalisasi untuk kemudahan akses produk berkualitas
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="/lovable-uploads/08e1c42c-5af2-4903-91ec-d1a9249deba8.png" 
                alt="Peta Desa Sukaharja"
                className="w-full h-auto object-contain rounded-lg shadow-lg bg-white"
              />
            </div>
            <div>
              <h4 className="text-2xl font-bold text-green-800 mb-6">Profil Desa Sukaharja</h4>
              <div className="space-y-4 mb-6">
                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="text-gray-700 font-medium mb-2">📍 Alamat:</p>
                  <p className="text-gray-600">Jl. Raya Pondok Bitung No.73, RT.03/RW.2, Sukaharja, Kec. Cijeruk, Kab. Bogor, Jawa Barat</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="text-gray-700 font-medium mb-2">📏 Luas Wilayah:</p>
                  <p className="text-gray-600">531,56 Hektare</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="text-gray-700 font-medium mb-2">🏘️ Struktur Wilayah:</p>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Dusun: 3, RW: 9, RT: 50</li>
                    <li>• Penduduk: ±14.863 jiwa (mayoritas petani dan buruh tani)</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="text-gray-700 font-medium mb-2">🗺️ Batas Wilayah:</p>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Timur: Tajur Halang</li>
                    <li>• Barat: Desa Sukamantri</li>
                    <li>• Selatan: Gn. Salak</li>
                    <li>• Utara: Kel. Mulyaharja</li>
                  </ul>
                </div>
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Desa di bagian barat Kecamatan Cijeruk, Kabupaten Bogor ini memiliki potensi agrikultur besar dengan luas 531,56 hektare dan penduduk sekitar 14.863 jiwa, mayoritas petani dan buruh tani.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Komoditas unggulan seperti talas, nanas, dan tanaman hias menjadi ciri khasnya, namun belum dimanfaatkan secara optimal karena kurangnya inovasi dan pengetahuan bisnis.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Inovasi pangan penting untuk keberlanjutan desa melalui pengembangan varietas baru, teknologi pertanian efisien, dan pemanfaatan sumber daya alam yang berkelanjutan.
              </p>
              <Button 
                className="bg-green-600 hover:bg-green-700"
                onClick={() => handleFeatureClick('village')}
              >
                Pelajari Lebih Lanjut
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products - Komoditas Unggulan */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-green-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-green-800 mb-4">Komoditas Unggulan</h3>
            <p className="text-green-600 max-w-2xl mx-auto">
              Produk terbaik dari Desa Sukaharja yang telah dipercaya oleh pelanggan
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <Badge className="absolute top-3 right-3 bg-green-600">
                    {product.category}
                  </Badge>
                </div>
                <CardContent className="p-6 space-y-4">
                  <div>
                    <h4 className="font-bold text-lg text-green-800 mb-2">{product.name}</h4>
                    <p className="text-gray-600 text-sm mb-3">{product.description}</p>
                    <div className="flex items-center mb-3">
                      <Star className="h-4 w-4 text-yellow-500 fill-current" />
                      <span className="ml-1 text-sm text-gray-600">{product.rating}</span>
                    </div>
                  </div>
                  
                  {product.keunggulan && (
                    <div>
                      <h5 className="font-semibold text-green-700 mb-2">Keunggulan:</h5>
                      <ul className="text-xs text-gray-600 space-y-1">
                        {product.keunggulan.map((item, idx) => (
                          <li key={idx}>• {item}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {product.manfaat && (
                    <div>
                      <h5 className="font-semibold text-green-700 mb-2">Manfaat:</h5>
                      <ul className="text-xs text-gray-600 space-y-1">
                        {product.manfaat.map((item, idx) => (
                          <li key={idx}>• {item}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {product.jenis && (
                    <div>
                      <h5 className="font-semibold text-green-700 mb-2">Jenis Tersedia:</h5>
                      <div className="space-y-2 text-xs text-gray-600">
                        <div>
                          <strong>Tanaman Hias Daun:</strong>
                          <p>{product.jenis.daun.join(', ')}</p>
                        </div>
                        <div>
                          <strong>Tanaman Hias Bunga:</strong>
                          <p>{product.jenis.bunga.join(', ')}</p>
                        </div>
                        <div>
                          <strong>Tanaman Gantung & Outdoor:</strong>
                          <p>{product.jenis.gantung.join(', ')}</p>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  <div className="bg-yellow-50 p-3 rounded-lg">
                    <p className="text-sm font-semibold text-green-800">
                      Harga: {product.harga}
                    </p>
                  </div>
                  
                  <Button 
                    size="sm"
                    className="w-full bg-green-600 hover:bg-green-700"
                    onClick={() => handleFeatureClick('catalog')}
                  >
                    <ShoppingCart className="h-4 w-4 mr-1" />
                    Lihat Detail
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-green-800 mb-4">Galeri Desa</h3>
            <p className="text-green-600 max-w-2xl mx-auto">
              Dokumentasi kegiatan dan potensi Desa Sukaharja
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                image: '/lovable-uploads/5156a629-12f0-43f1-a5ae-0d4b48acdfed.png',
                title: 'Lahan Pertanian Desa'
              },
              {
                image: '/lovable-uploads/eb20acab-a584-4931-b44f-936e74a28cf0.png',
                title: 'Kegiatan Masyarakat Petani'
              },
              {
                image: '/lovable-uploads/b8d2da31-06d1-4072-8b55-616be68b716b.png',
                title: 'Diskusi Warga Desa'
              },
              {
                image: '/lovable-uploads/72c90817-7ea1-4677-a40f-66265cea474c.png',
                title: 'Perkebunan Talas'
              },
              {
                image: '/lovable-uploads/c62d382b-9962-490e-a225-3a092ca53b0b.png',
                title: 'Lahan Nanas'
              },
              {
                image: '/lovable-uploads/9cdce8d7-fc10-4455-9822-c33b8810e7e4.png',
                title: 'Tanaman Hias'
              },
              {
                image: '/lovable-uploads/7114d40d-41ab-4eb7-98a7-2649ce9ed625.png',
                title: 'Panen Talas'
              },
              {
                image: '/lovable-uploads/0256bbdc-e72c-460f-91ef-e15c217aad1e.png',
                title: 'Pusat Pembelajaran Pertanian'
              }
            ].map((item, index) => (
              <div key={index} className="relative overflow-hidden rounded-lg shadow-lg group">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-green-800/0 group-hover:bg-green-800/30 transition-all duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h4 className="text-white font-semibold text-sm">{item.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Quality Section */}
      <section className="py-16 bg-yellow-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-xl border-0">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold text-green-800 mb-4">Produk Asli Desa, Kualitas Istimewa</h3>
                    <p className="text-gray-700 mb-4">
                      Semua produk kami berasal langsung dari petani lokal Desa Sukaharja dengan kualitas terjamin dan harga yang bersahabat.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <Star className="h-5 w-5 text-yellow-500 mr-2" />
                        <span className="text-gray-700">Kualitas terjamin</span>
                      </div>
                      <div className="flex items-center">
                        <ShoppingCart className="h-5 w-5 text-green-600 mr-2" />
                        <span className="text-gray-700">Harga langsung dari petani</span>
                      </div>
                      <div className="flex items-center">
                        <Map className="h-5 w-5 text-blue-600 mr-2" />
                        <span className="text-gray-700">Pengiriman ke seluruh Indonesia</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <img 
                      src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=500&h=400&fit=crop" 
                      alt="Produk Berkualitas"
                      className="w-full h-64 object-cover rounded-lg shadow-lg"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Active Section Content */}
      {activeSection !== 'home' && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <Card className="max-w-4xl mx-auto shadow-xl border-0">
              <CardHeader className="bg-gradient-to-r from-green-600 to-green-700 text-white rounded-t-lg">
                <CardTitle className="text-2xl text-center">
                  {features.find(f => f.id === activeSection)?.title || 
                   navigationItems.find(n => n.id === activeSection)?.name}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <p className="text-lg text-gray-700 text-center leading-relaxed">
                  {features.find(f => f.id === activeSection)?.content || 
                   "Konten untuk bagian ini sedang dalam pengembangan."}
                </p>
                <div className="mt-6 text-center">
                  <Button 
                    onClick={() => setActiveSection('home')}
                    variant="outline"
                    className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
                  >
                    Kembali ke Beranda
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="bg-green-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-bold text-lg mb-4">Suka Belanja di Harja</h4>
              <p className="text-green-200">Platform digital Desa Sukaharja untuk memasarkan produk lokal berkualitas.</p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Produk</h4>
              <ul className="space-y-2 text-green-200">
                <li>
                  <button 
                    onClick={() => handleFeatureClick('featured')}
                    className="hover:text-white transition-colors text-left"
                  >
                    Nanas
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handleFeatureClick('featured')}
                    className="hover:text-white transition-colors text-left"
                  >
                    Talas
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handleFeatureClick('featured')}
                    className="hover:text-white transition-colors text-left"
                  >
                    Tanaman Hias
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handleFeatureClick('catalog')}
                    className="hover:text-white transition-colors text-left"
                  >
                    Produk Lokal Lainnya
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Layanan</h4>
              <ul className="space-y-2 text-green-200">
                <li>
                  <button 
                    onClick={() => handleFeatureClick('cart')}
                    className="hover:text-white transition-colors text-left"
                  >
                    Pengiriman
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handleFeatureClick('chat')}
                    className="hover:text-white transition-colors text-left"
                  >
                    Konsultasi
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handleNavClick('partnership')}
                    className="hover:text-white transition-colors text-left"
                  >
                    Kemitraan
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handleFeatureClick('education')}
                    className="hover:text-white transition-colors text-left"
                  >
                    Edukasi
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Kontak</h4>
              <ul className="space-y-2 text-green-200">
                <li>
                  <button 
                    onClick={() => handleFeatureClick('chat')}
                    className="hover:text-white transition-colors text-left"
                  >
                    info@sukabelanjadharja.com
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handleFeatureClick('chat')}
                    className="hover:text-white transition-colors text-left"
                  >
                    +62 812-3456-7890
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handleFeatureClick('village')}
                    className="hover:text-white transition-colors text-left"
                  >
                    Desa Sukaharja
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handleFeatureClick('village')}
                    className="hover:text-white transition-colors text-left"
                  >
                    Kabupaten Sukabumi
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-green-700 mt-8 pt-8 text-center text-green-200">
            <p>&copy; 2024 Suka Belanja di Harja - Desa Sukaharja. Semua hak cipta dilindungi.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
