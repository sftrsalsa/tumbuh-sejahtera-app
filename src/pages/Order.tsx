
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft, ShoppingCart, Package, User, MapPin, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useToast } from "@/hooks/use-toast";

const Order = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    nama: '',
    email: '',
    telepon: '',
    alamat: '',
    produk: '',
    jumlah: '',
    catatan: ''
  });

  const products = [
    { id: 'nanas', name: 'Nanas Gati Sukaharja', price: 'Rp15.000' },
    { id: 'talas', name: 'Talas Khas Sukaharja', price: 'Rp20.000/kg' },
    { id: 'aglaonema', name: 'Aglaonema (Sri Rejeki)', price: 'Rp25.000' },
    { id: 'lidah-mertua', name: 'Lidah Mertua', price: 'Rp35.000' },
    { id: 'sayuran', name: 'Sayuran Organik', price: 'Rp8.000/kg' },
    { id: 'anggrek', name: 'Anggrek Bulan', price: 'Rp75.000' }
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validasi form
    if (!formData.nama || !formData.email || !formData.telepon || !formData.alamat || !formData.produk || !formData.jumlah) {
      toast({
        title: "Error",
        description: "Mohon lengkapi semua field yang wajib diisi",
        variant: "destructive"
      });
      return;
    }

    // Validasi email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Error",
        description: "Format email tidak valid",
        variant: "destructive"
      });
      return;
    }

    // Validasi nomor telepon
    const phoneRegex = /^[0-9+\-\s()]+$/;
    if (!phoneRegex.test(formData.telepon)) {
      toast({
        title: "Error",
        description: "Format nomor telepon tidak valid",
        variant: "destructive"
      });
      return;
    }

    // Simulasi pengiriman pesanan
    toast({
      title: "Pesanan Berhasil!",
      description: `Terima kasih ${formData.nama}! Pesanan Anda untuk ${formData.produk} telah diterima. Tim kami akan segera menghubungi Anda.`,
    });

    // Reset form
    setFormData({
      nama: '',
      email: '',
      telepon: '',
      alamat: '',
      produk: '',
      jumlah: '',
      catatan: ''
    });

    console.log('Form submitted:', formData);
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
            <h1 className="text-2xl font-bold text-green-800">Form Pemesanan Produk</h1>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-2xl">
        {/* Hero Section */}
        <div className="bg-green-600 text-white rounded-lg p-6 mb-8">
          <div className="flex items-center space-x-3">
            <ShoppingCart className="h-8 w-8" />
            <div>
              <h2 className="text-2xl font-bold">Pesan Produk Sekarang</h2>
              <p className="text-green-100">Isi form di bawah untuk memesan produk dari Desa Sukaharja</p>
            </div>
          </div>
        </div>

        {/* Order Form */}
        <Card className="shadow-xl border-0">
          <CardHeader className="bg-green-50">
            <CardTitle className="text-green-800 flex items-center space-x-2">
              <Package className="h-5 w-5" />
              <span>Informasi Pemesanan</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Informasi Pembeli */}
              <div className="space-y-4">
                <div className="flex items-center space-x-2 mb-4">
                  <User className="h-5 w-5 text-green-600" />
                  <h3 className="text-lg font-semibold text-green-800">Informasi Pembeli</h3>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="nama" className="text-green-700">Nama Lengkap *</Label>
                    <Input
                      id="nama"
                      type="text"
                      value={formData.nama}
                      onChange={(e) => handleInputChange('nama', e.target.value)}
                      placeholder="Masukkan nama lengkap"
                      className="mt-1"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="email" className="text-green-700">Email *</Label>
                    <div className="relative">
                      <Mail className="h-4 w-4 absolute left-3 top-3 text-gray-400" />
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="contoh@email.com"
                        className="mt-1 pl-10"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="telepon" className="text-green-700">Nomor Telepon *</Label>
                    <div className="relative">
                      <Phone className="h-4 w-4 absolute left-3 top-3 text-gray-400" />
                      <Input
                        id="telepon"
                        type="tel"
                        value={formData.telepon}
                        onChange={(e) => handleInputChange('telepon', e.target.value)}
                        placeholder="08xxxxxxxxxx"
                        className="mt-1 pl-10"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="md:col-span-1">
                    <Label htmlFor="alamat" className="text-green-700">Alamat Lengkap *</Label>
                    <div className="relative">
                      <MapPin className="h-4 w-4 absolute left-3 top-3 text-gray-400" />
                      <Textarea
                        id="alamat"
                        value={formData.alamat}
                        onChange={(e) => handleInputChange('alamat', e.target.value)}
                        placeholder="Jl. Contoh No. 123, Kota, Provinsi"
                        className="mt-1 pl-10 min-h-[80px]"
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Informasi Produk */}
              <div className="space-y-4">
                <div className="flex items-center space-x-2 mb-4">
                  <Package className="h-5 w-5 text-green-600" />
                  <h3 className="text-lg font-semibold text-green-800">Informasi Produk</h3>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="produk" className="text-green-700">Pilih Produk *</Label>
                    <Select value={formData.produk} onValueChange={(value) => handleInputChange('produk', value)}>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Pilih produk yang ingin dipesan" />
                      </SelectTrigger>
                      <SelectContent>
                        {products.map((product) => (
                          <SelectItem key={product.id} value={product.name}>
                            {product.name} - {product.price}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label htmlFor="jumlah" className="text-green-700">Jumlah *</Label>
                    <Input
                      id="jumlah"
                      type="text"
                      value={formData.jumlah}
                      onChange={(e) => handleInputChange('jumlah', e.target.value)}
                      placeholder="Contoh: 2 kg, 5 buah"
                      className="mt-1"
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="catatan" className="text-green-700">Catatan Tambahan</Label>
                  <Textarea
                    id="catatan"
                    value={formData.catatan}
                    onChange={(e) => handleInputChange('catatan', e.target.value)}
                    placeholder="Tuliskan catatan khusus untuk pesanan Anda (opsional)"
                    className="mt-1"
                    rows={3}
                  />
                </div>
              </div>

              {/* Info Pembayaran */}
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <h4 className="font-semibold text-yellow-800 mb-2">Informasi Pembayaran</h4>
                <p className="text-sm text-yellow-700">
                  Setelah pesanan dikonfirmasi, tim kami akan menghubungi Anda untuk mengatur pembayaran dan pengiriman.
                </p>
              </div>

              {/* Submit Button */}
              <Button 
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white py-3 text-lg"
              >
                <ShoppingCart className="h-5 w-5 mr-2" />
                Kirim Pesanan
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Contact Info */}
        <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-bold text-green-800 mb-4">Butuh Bantuan?</h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-gray-600 mb-2">
                <strong>WhatsApp:</strong> +62 812-3456-7890
              </p>
              <p className="text-gray-600">
                <strong>Email:</strong> info@sukaharja.com
              </p>
            </div>
            <div>
              <p className="text-gray-600 mb-2">
                <strong>Jam Operasional:</strong><br />
                Senin - Sabtu: 08:00 - 17:00 WIB
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
