
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, ShoppingCart, ArrowLeft, Filter, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useToast } from "@/hooks/use-toast";

const Catalog = () => {
  const { toast } = useToast();
  const [selectedCategory, setSelectedCategory] = useState('all');

  const products = [
    {
      id: 1,
      name: 'Nanas Gati Sukaharja',
      price: 'Rp15.000',
      image: '/lovable-uploads/c62d382b-9962-490e-a225-3a092ca53b0b.png',
      category: 'buah',
      rating: 4.8,
      stock: 50,
      description: 'Nanas Gati segar langsung dari kebun'
    },
    {
      id: 2,
      name: 'Talas Khas Sukaharja',
      price: 'Rp20.000/kg',
      image: '/lovable-uploads/72c90817-7ea1-4677-a40f-66265cea474c.png',
      category: 'umbi',
      rating: 4.9,
      stock: 30,
      description: 'Talas organik berkualitas tinggi'
    },
    {
      id: 3,
      name: 'Aglaonema (Sri Rejeki)',
      price: 'Rp25.000',
      image: '/lovable-uploads/9cdce8d7-fc10-4455-9822-c33b8810e7e4.png',
      category: 'tanaman_hias',
      rating: 4.8,
      stock: 15,
      description: 'Tanaman hias daun cantik'
    },
    {
      id: 4,
      name: 'Lidah Mertua',
      price: 'Rp35.000',
      image: '/lovable-uploads/9cdce8d7-fc10-4455-9822-c33b8810e7e4.png',
      category: 'tanaman_hias',
      rating: 4.8,
      stock: 20,
      description: 'Tanaman penyerap polutan'
    },
    {
      id: 5,
      name: 'Sayuran Organik',
      price: 'Rp12.000/kg',
      image: '/lovable-uploads/5156a629-12f0-43f1-a5ae-0d4b48acdfed.png',
      category: 'sayuran',
      rating: 4.8,
      stock: 25,
      description: 'Sayuran segar tanpa pestisida'
    },
    {
      id: 6,
      name: 'Anggrek Bulan',
      price: 'Rp75.000',
      image: '/lovable-uploads/9cdce8d7-fc10-4455-9822-c33b8810e7e4.png',
      category: 'tanaman_hias',
      rating: 4.8,
      stock: 10,
      description: 'Bunga anggrek indah tahan lama'
    }
  ];

  const categories = [
    { id: 'all', name: 'Semua Produk' },
    { id: 'buah', name: 'Buah-buahan' },
    { id: 'umbi', name: 'Umbi-umbian' },
    { id: 'tanaman_hias', name: 'Tanaman Hias' },
    { id: 'sayuran', name: 'Sayuran' }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

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
            <div className="flex items-center space-x-4">
              <Link to="/">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Kembali
                </Button>
              </Link>
              <h1 className="text-2xl font-bold text-green-800">Katalog Produk</h1>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="h-4 w-4 absolute left-3 top-3 text-gray-400" />
                <input 
                  type="text" 
                  placeholder="Cari produk..."
                  className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <Button variant="outline">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Categories */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-green-800 mb-4">Kategori Produk</h2>
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className={selectedCategory === category.id ? "bg-green-600 hover:bg-green-700" : ""}
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <Card key={product.id} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2">
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
              <CardContent className="p-4 space-y-3">
                <div>
                  <h3 className="font-bold text-lg text-green-800 mb-1">{product.name}</h3>
                  <p className="text-gray-600 text-sm mb-2">{product.description}</p>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-lg font-bold text-green-600">{product.price}</span>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-500 fill-current" />
                      <span className="ml-1 text-sm text-gray-600">{product.rating}</span>
                    </div>
                  </div>
                </div>
                <Button 
                  className="w-full bg-green-600 hover:bg-green-700"
                  onClick={() => handleAddToCart(product.name)}
                >
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  Tambah ke Keranjang
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Info Section */}
        <div className="mt-12 bg-white rounded-lg shadow-lg p-8">
          <h3 className="text-2xl font-bold text-green-800 mb-4 text-center">Kenapa Memilih Produk Kami?</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-green-600" />
              </div>
              <h4 className="font-semibold text-green-800 mb-2">Kualitas Terjamin</h4>
              <p className="text-gray-600">Produk langsung dari petani dengan kualitas terbaik</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShoppingCart className="h-8 w-8 text-green-600" />
              </div>
              <h4 className="font-semibold text-green-800 mb-2">Harga Terjangkau</h4>
              <p className="text-gray-600">Harga langsung dari petani tanpa perantara</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <ArrowLeft className="h-8 w-8 text-green-600" />
              </div>
              <h4 className="font-semibold text-green-800 mb-2">Pengiriman Cepat</h4>
              <p className="text-gray-600">Pengiriman fresh dan cepat ke seluruh Indonesia</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catalog;
