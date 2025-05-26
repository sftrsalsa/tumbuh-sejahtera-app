
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Users, Handshake, TrendingUp, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useToast } from "@/hooks/use-toast";

const Partnership = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    partnershipType: '',
    message: ''
  });

  const partnershipTypes = [
    {
      title: 'Distributor Regional',
      description: 'Menjadi distributor produk kami di wilayah tertentu',
      benefits: ['Margin keuntungan menarik', 'Dukungan marketing', 'Pelatihan produk'],
      icon: TrendingUp,
      color: 'bg-blue-600'
    },
    {
      title: 'Reseller Online',
      description: 'Jual produk kami melalui platform online Anda',
      benefits: ['Modal minim', 'Fleksibilitas waktu', 'Komisi kompetitif'],
      icon: Users,
      color: 'bg-green-600'
    },
    {
      title: 'Kemitraan Strategis',
      description: 'Kerjasama jangka panjang untuk pengembangan bisnis',
      benefits: ['Akses eksklusif produk', 'Pengembangan bersama', 'Dukungan penuh'],
      icon: Handshake,
      color: 'bg-purple-600'
    },
    {
      title: 'Franchise',
      description: 'Buka outlet resmi Suka Belanja di Harja',
      benefits: ['Brand recognition', 'Sistem operasional proven', 'ROI menarik'],
      icon: Award,
      color: 'bg-orange-600'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Formulir Terkirim",
      description: "Terima kasih atas minat Anda. Tim kami akan menghubungi Anda dalam 1x24 jam.",
    });
    setFormData({
      name: '',
      company: '',
      email: '',
      phone: '',
      partnershipType: '',
      message: ''
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
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
            <h1 className="text-2xl font-bold text-green-800">Kemitraan Belanja</h1>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-green-600 to-green-700 text-white rounded-lg p-8 mb-8">
          <h2 className="text-3xl font-bold mb-4">Bergabunglah dengan Mitra Sukses Kami</h2>
          <p className="text-lg mb-4">Wujudkan impian bisnis Anda bersama Suka Belanja di Harja</p>
          <p className="text-green-100">Dapatkan kesempatan emas untuk menjadi bagian dari ekosistem pertanian digital terdepan di Indonesia</p>
        </div>

        {/* Partnership Types */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-green-800 mb-6 text-center">Jenis Kemitraan Tersedia</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {partnershipTypes.map((type, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardHeader className="text-center">
                  <div className={`${type.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <type.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-green-800">{type.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600 text-sm">{type.description}</p>
                  <div>
                    <h4 className="font-semibold text-green-700 mb-2">Keuntungan:</h4>
                    <ul className="text-xs text-gray-600 space-y-1">
                      {type.benefits.map((benefit, idx) => (
                        <li key={idx}>• {benefit}</li>
                      ))}
                    </ul>
                  </div>
                  <Button 
                    className="w-full bg-green-600 hover:bg-green-700"
                    onClick={() => setFormData({...formData, partnershipType: type.title})}
                  >
                    Pilih Kemitraan
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Partnership Form */}
        <div className="max-w-2xl mx-auto">
          <Card className="shadow-xl border-0">
            <CardHeader className="bg-green-600 text-white rounded-t-lg">
              <CardTitle className="text-2xl text-center">Formulir Kemitraan</CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Nama Lengkap *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Nama Perusahaan</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Nomor Telepon *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">Jenis Kemitraan *</label>
                  <select
                    name="partnershipType"
                    value={formData.partnershipType}
                    onChange={handleInputChange}
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    required
                  >
                    <option value="">Pilih Jenis Kemitraan</option>
                    {partnershipTypes.map((type) => (
                      <option key={type.title} value={type.title}>{type.title}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">Pesan</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Ceritakan tentang rencana bisnis Anda..."
                  ></textarea>
                </div>

                <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 py-3 text-lg">
                  Kirim Formulir Kemitraan
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Why Partner With Us */}
        <div className="mt-12 bg-white rounded-lg shadow-lg p-8">
          <h3 className="text-2xl font-bold text-green-800 mb-6 text-center">Mengapa Bermitra dengan Kami?</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-green-600" />
              </div>
              <h4 className="font-semibold text-green-800 mb-2">Market yang Berkembang</h4>
              <p className="text-gray-600">Pasar produk pertanian online terus tumbuh 30% per tahun</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h4 className="font-semibold text-green-800 mb-2">Dukungan Penuh</h4>
              <p className="text-gray-600">Tim berpengalaman siap mendampingi kesuksesan Anda</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-green-600" />
              </div>
              <h4 className="font-semibold text-green-800 mb-2">Brand Terpercaya</h4>
              <p className="text-gray-600">Reputasi baik di mata konsumen dan supplier</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partnership;
