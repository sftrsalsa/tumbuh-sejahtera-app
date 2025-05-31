
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft, ShoppingCart, Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useToast } from "@/hooks/use-toast";

const Order = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postalCode: '',
    product: '',
    quantity: '',
    notes: ''
  });

  const products = [
    { value: 'nanas', label: 'Nanas Gati Sukaharja - Rp15.000/buah' },
    { value: 'talas', label: 'Talas Khas Sukaharja - Rp20.000/kg' },
    { value: 'aglaonema', label: 'Aglaonema (Sri Rejeki) - Rp25.000' },
    { value: 'lidah-mertua', label: 'Lidah Mertua - Rp35.000' },
    { value: 'sayuran', label: 'Sayuran Organik - Rp8.000/kg' },
    { value: 'anggrek', label: 'Anggrek Bulan - Rp75.000' }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      product: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.name || !formData.phone || !formData.address || !formData.product || !formData.quantity) {
      toast({
        title: "Form Tidak Lengkap",
        description: "Mohon lengkapi semua field yang wajib diisi",
        variant: "destructive"
      });
      return;
    }

    // Simulate order submission
    toast({
      title: "Pesanan Berhasil Dikirim!",
      description: `Terima kasih ${formData.name}, pesanan Anda akan segera diproses. Tim kami akan menghubungi Anda dalam 1x24 jam.`,
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      address: '',
      city: '',
      postalCode: '',
      product: '',
      quantity: '',
      notes: ''
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
            <h1 className="text-2xl font-bold text-green-800">Form Pemesanan Produk</h1>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <Card className="mb-8 bg-green-600 text-white border-0">
            <CardContent className="p-8 text-center">
              <ShoppingCart className="h-16 w-16 mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-4">Pesan Produk Berkualitas</h2>
              <p className="text-lg">
                Lengkapi form di bawah ini untuk memesan produk segar langsung dari Desa Sukaharja
              </p>
            </CardContent>
          </Card>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Order Form */}
            <div className="lg:col-span-2">
              <Card className="shadow-xl border-0">
                <CardHeader className="bg-gradient-to-r from-green-600 to-green-700 text-white rounded-t-lg">
                  <CardTitle className="text-xl">Informasi Pemesanan</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Personal Information */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-green-800 border-b border-green-200 pb-2">
                        Informasi Pribadi
                      </h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="name">Nama Lengkap *</Label>
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Masukkan nama lengkap"
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="phone">Nomor Telepon *</Label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="08xxxxxxxxxx"
                            required
                          />
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="nama@email.com"
                        />
                      </div>
                    </div>

                    {/* Address Information */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-green-800 border-b border-green-200 pb-2">
                        Alamat Pengiriman
                      </h3>
                      <div>
                        <Label htmlFor="address">Alamat Lengkap *</Label>
                        <Textarea
                          id="address"
                          name="address"
                          value={formData.address}
                          onChange={handleInputChange}
                          placeholder="Jalan, No. Rumah, RT/RW, Kelurahan, Kecamatan"
                          rows={3}
                          required
                        />
                      </div>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="city">Kota/Kabupaten</Label>
                          <Input
                            id="city"
                            name="city"
                            value={formData.city}
                            onChange={handleInputChange}
                            placeholder="Masukkan kota/kabupaten"
                          />
                        </div>
                        <div>
                          <Label htmlFor="postalCode">Kode Pos</Label>
                          <Input
                            id="postalCode"
                            name="postalCode"
                            value={formData.postalCode}
                            onChange={handleInputChange}
                            placeholder="12345"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Product Information */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-green-800 border-b border-green-200 pb-2">
                        Detail Pesanan
                      </h3>
                      <div>
                        <Label htmlFor="product">Pilih Produk *</Label>
                        <Select onValueChange={handleSelectChange} required>
                          <SelectTrigger>
                            <SelectValue placeholder="Pilih produk yang ingin dipesan" />
                          </SelectTrigger>
                          <SelectContent>
                            {products.map((product) => (
                              <SelectItem key={product.value} value={product.value}>
                                {product.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="quantity">Jumlah *</Label>
                        <Input
                          id="quantity"
                          name="quantity"
                          type="number"
                          min="1"
                          value={formData.quantity}
                          onChange={handleInputChange}
                          placeholder="Masukkan jumlah"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="notes">Catatan Tambahan</Label>
                        <Textarea
                          id="notes"
                          name="notes"
                          value={formData.notes}
                          onChange={handleInputChange}
                          placeholder="Tuliskan catatan khusus untuk pesanan Anda (opsional)"
                          rows={3}
                        />
                      </div>
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full bg-green-600 hover:bg-green-700 text-lg py-3"
                    >
                      <ShoppingCart className="h-5 w-5 mr-2" />
                      Kirim Pesanan
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Order Summary & Contact Info */}
            <div className="space-y-6">
              {/* Contact Information */}
              <Card className="shadow-lg border-0">
                <CardHeader className="bg-green-100">
                  <CardTitle className="text-green-800">Informasi Kontak</CardTitle>
                </CardHeader>
                <CardContent className="p-4 space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-green-600" />
                    <div>
                      <p className="font-semibold">Telepon</p>
                      <p className="text-sm text-gray-600">+62 812-3456-7890</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-green-600" />
                    <div>
                      <p className="font-semibold">Email</p>
                      <p className="text-sm text-gray-600">info@sukabelanjadharja.com</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-green-600" />
                    <div>
                      <p className="font-semibold">Alamat</p>
                      <p className="text-sm text-gray-600">Desa Sukaharja, Kec. Cijeruk, Kab. Bogor</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Order Process */}
              <Card className="shadow-lg border-0">
                <CardHeader className="bg-yellow-100">
                  <CardTitle className="text-green-800">Proses Pemesanan</CardTitle>
                </CardHeader>
                <CardContent className="p-4">
                  <div className="space-y-3 text-sm">
                    <div className="flex items-start space-x-3">
                      <div className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">1</div>
                      <p>Isi form pemesanan dengan lengkap</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">2</div>
                      <p>Tim kami akan menghubungi dalam 1x24 jam</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">3</div>
                      <p>Konfirmasi pesanan dan metode pembayaran</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">4</div>
                      <p>Produk dikirim ke alamat Anda</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quality Guarantee */}
              <Card className="shadow-lg border-0 bg-green-50">
                <CardContent className="p-4 text-center">
                  <h4 className="font-bold text-green-800 mb-2">Jaminan Kualitas</h4>
                  <p className="text-sm text-gray-600">
                    Semua produk dijamin segar dan berkualitas tinggi. 
                    Jika tidak puas, uang kembali 100%!
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
