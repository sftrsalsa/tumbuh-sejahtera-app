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
      name: 'Nanas Madu Premium',
      price: 'Rp 35.000/kg',
      image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=300&fit=crop',
      rating: 4.8,
      stock: 50
    },
    {
      name: 'Talas Bogor Segar',
      price: 'Rp 15.000/kg',
      image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400&h=300&fit=crop',
      rating: 4.6,
      stock: 30
    },
    {
      name: 'Tanaman Hias Anthurium',
      price: 'Rp 125.000/pot',
      image: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=400&h=300&fit=crop',
      rating: 4.9,
      stock: 15
    }
  ];

  const handleFeatureClick = (featureId: string) => {
    setActiveSection(featureId);
    toast({
      title: "Fitur Aktif",
      description: `Menampilkan ${features.find(f => f.id === featureId)?.title}`,
    });
  };

  const handleAddToCart = (productName: string) => {
    toast({
      title: "Ditambahkan ke Keranjang",
      description: `${productName} berhasil ditambahkan ke keranjang belanja`,
    });
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
                <h1 className="text-2xl font-bold text-green-800">AgroVillage</h1>
                <p className="text-green-600 text-sm">Platform Agrikultur Terpadu</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-6">
              {['Home', 'Produk', 'Tentang', 'Kontak'].map((item) => (
                <Button
                  key={item}
                  variant="ghost"
                  className="text-green-700 hover:text-green-900 hover:bg-green-100"
                >
                  {item}
                </Button>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-700 via-green-600 to-green-500 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl font-bold mb-6 leading-tight">
              Produk Agrikultur Berkualitas
              <span className="block text-yellow-300">Langsung dari Desa</span>
            </h2>
            <p className="text-xl mb-8 text-green-100">
              Temukan beragam produk pertanian segar dan berkualitas tinggi 
              dari petani lokal terpercaya. Dari nanas madu hingga tanaman hias premium.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-3"
                onClick={() => setActiveSection('catalog')}
              >
                Jelajahi Produk
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-green-700 px-8 py-3"
                onClick={() => setActiveSection('village')}
              >
                Tentang Desa
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-green-800 mb-4">Komoditas Unggulan</h3>
            <p className="text-green-600 max-w-2xl mx-auto">
              Produk terbaik kami yang telah dipercaya oleh ribuan pelanggan di seluruh Indonesia
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
                    Stok: {product.stock}
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <h4 className="font-bold text-lg text-green-800 mb-2">{product.name}</h4>
                  <div className="flex items-center mb-3">
                    <Star className="h-4 w-4 text-yellow-500 fill-current" />
                    <span className="ml-1 text-sm text-gray-600">{product.rating}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-green-600">{product.price}</span>
                    <Button 
                      size="sm"
                      className="bg-green-600 hover:bg-green-700"
                      onClick={() => handleAddToCart(product.name)}
                    >
                      <ShoppingCart className="h-4 w-4 mr-1" />
                      Beli
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-green-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-green-800 mb-4">Fitur Platform</h3>
            <p className="text-green-600 max-w-2xl mx-auto">
              Semua yang Anda butuhkan untuk berbelanja produk agrikultur dalam satu platform
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => {
              const IconComponent = feature.icon;
              return (
                <Card 
                  key={feature.id}
                  className="group cursor-pointer hover:shadow-xl transition-all duration-300 border-0 shadow-md hover:-translate-y-1"
                  onClick={() => handleFeatureClick(feature.id)}
                >
                  <CardHeader className="text-center">
                    <div className={`${feature.color} p-4 rounded-full w-16 h-16 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-green-800 text-lg">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center text-gray-600 leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
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
                  {features.find(f => f.id === activeSection)?.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <p className="text-lg text-gray-700 text-center leading-relaxed">
                  {features.find(f => f.id === activeSection)?.content}
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

      {/* Statistics */}
      <section className="py-16 bg-green-700 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: '500+', label: 'Produk Tersedia' },
              { number: '2000+', label: 'Pelanggan Puas' },
              { number: '50+', label: 'Petani Mitra' },
              { number: '24/7', label: 'Customer Service' }
            ].map((stat, index) => (
              <div key={index} className="group">
                <div className="text-4xl font-bold text-yellow-300 mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-green-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-bold text-lg mb-4">AgroVillage</h4>
              <p className="text-green-200">Platform agrikultur terpadu yang menghubungkan petani dengan konsumen.</p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Produk</h4>
              <ul className="space-y-2 text-green-200">
                <li>Buah-buahan</li>
                <li>Sayuran</li>
                <li>Tanaman Hias</li>
                <li>Bumbu Dapur</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Layanan</h4>
              <ul className="space-y-2 text-green-200">
                <li>Pengiriman</li>
                <li>Konsultasi</li>
                <li>Pelatihan</li>
                <li>Kemitraan</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Kontak</h4>
              <ul className="space-y-2 text-green-200">
                <li>info@agrovillage.com</li>
                <li>+62 812-3456-7890</li>
                <li>Jl. Pertanian No. 123</li>
                <li>Desa Makmur, Indonesia</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-green-700 mt-8 pt-8 text-center text-green-200">
            <p>&copy; 2024 AgroVillage. Semua hak cipta dilindungi.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
