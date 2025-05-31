
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, ShoppingCart, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useToast } from "@/hooks/use-toast";

const FeaturedProducts = () => {
  const { toast } = useToast();

  const featuredProducts = [
    {
      name: 'Nanas Gati Sukaharja',
      description: 'Nanas Gati adalah varietas nanas lokal Bogor yang terkenal dengan rasa manis segar dan sedikit asam. Daging buahnya renyah, berair, dan memiliki aroma khas yang menggugah selera.',
      image: '/lovable-uploads/0f7f2978-92cd-4ff3-ad28-f52723965191.png',
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
      image: '/lovable-uploads/3dc7840a-e5e1-4574-9556-c94ae6eaad23.png',
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
      image: '/lovable-uploads/05fdab06-fb90-402c-ac1f-68de55ba6387.png',
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

  const handleOrderProduct = (productName: string) => {
    toast({
      title: "Pesanan Dikonfirmasi",
      description: `Terima kasih telah memesan ${productName}. Tim kami akan segera menghubungi Anda.`,
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
            <h1 className="text-2xl font-bold text-green-800">Komoditas Unggulan</h1>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="bg-green-600 text-white rounded-lg p-8 mb-8">
          <h2 className="text-3xl font-bold mb-4">Produk Terbaik Desa Sukaharja</h2>
          <p className="text-lg">Komoditas unggulan yang telah dipercaya oleh ribuan pelanggan di seluruh Indonesia</p>
        </div>

        {/* Featured Products */}
        <div className="grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {featuredProducts.map((product, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <div className="relative overflow-hidden rounded-t-lg">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <Badge className="absolute top-3 right-3 bg-green-600">
                  {product.category}
                </Badge>
              </div>
              <CardContent className="p-6 space-y-4">
                <div>
                  <h3 className="font-bold text-xl text-green-800 mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-3">{product.description}</p>
                  <div className="flex items-center mb-4">
                    <Star className="h-5 w-5 text-yellow-500 fill-current" />
                    <span className="ml-1 text-lg font-semibold text-gray-700">{product.rating}</span>
                  </div>
                </div>
                
                {product.keunggulan && (
                  <div>
                    <h4 className="font-semibold text-green-700 mb-2">Keunggulan:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {product.keunggulan.map((item, idx) => (
                        <li key={idx}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {product.manfaat && (
                  <div>
                    <h4 className="font-semibold text-green-700 mb-2">Manfaat:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {product.manfaat.map((item, idx) => (
                        <li key={idx}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {product.jenis && (
                  <div>
                    <h4 className="font-semibold text-green-700 mb-2">Jenis Tersedia:</h4>
                    <div className="space-y-2 text-sm text-gray-600">
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
                
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <p className="text-sm font-semibold text-green-800">
                    Harga: {product.harga}
                  </p>
                </div>
                
                <Button 
                  className="w-full bg-green-600 hover:bg-green-700"
                  onClick={() => handleOrderProduct(product.name)}
                >
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  Pesan Sekarang
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Why Choose Us */}
        <div className="mt-12 bg-white rounded-lg shadow-lg p-8">
          <h3 className="text-2xl font-bold text-green-800 mb-6 text-center">Mengapa Memilih Komoditas Unggulan Kami?</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-green-600" />
              </div>
              <h4 className="font-semibold text-green-800 mb-2">Kualitas Premium</h4>
              <p className="text-gray-600 text-sm">Dipilih langsung dari petani terbaik</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShoppingCart className="h-8 w-8 text-green-600" />
              </div>
              <h4 className="font-semibold text-green-800 mb-2">Harga Kompetitif</h4>
              <p className="text-gray-600 text-sm">Langsung dari sumber tanpa markup</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <ArrowLeft className="h-8 w-8 text-green-600" />
              </div>
              <h4 className="font-semibold text-green-800 mb-2">Pengiriman Aman</h4>
              <p className="text-gray-600 text-sm">Kemasan khusus untuk produk segar</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-green-600" />
              </div>
              <h4 className="font-semibold text-green-800 mb-2">Jaminan Kepuasan</h4>
              <p className="text-gray-600 text-sm">100% garansi uang kembali</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
