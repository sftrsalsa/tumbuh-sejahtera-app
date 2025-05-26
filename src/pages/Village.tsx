
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, MapPin, Users, Landmark, TreePine } from 'lucide-react';
import { Link } from 'react-router-dom';

const Village = () => {
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
            <h1 className="text-2xl font-bold text-green-800">Mengenal Desa Sukaharja</h1>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-green-600 to-green-700 text-white rounded-lg p-8 mb-8">
          <h2 className="text-3xl font-bold mb-4">Desa Sukaharja</h2>
          <p className="text-lg">Desa dengan potensi agrikultur yang luar biasa di jantung Kabupaten Bogor</p>
        </div>

        {/* Village Profile */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <img 
              src="/lovable-uploads/08e1c42c-5af2-4903-91ec-d1a9249deba8.png" 
              alt="Peta Desa Sukaharja"
              className="w-full h-auto object-contain rounded-lg shadow-lg bg-white"
            />
          </div>
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-green-800">
                  <MapPin className="h-5 w-5 mr-2" />
                  Lokasi & Alamat
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-2">📍 <strong>Alamat:</strong></p>
                <p className="text-gray-600 mb-4">Jl. Raya Pondok Bitung No.73, RT.03/RW.2, Sukaharja, Kec. Cijeruk, Kab. Bogor, Jawa Barat</p>
                
                <p className="text-gray-700 mb-2">🗺️ <strong>Batas Wilayah:</strong></p>
                <ul className="text-gray-600 space-y-1">
                  <li>• Timur: Tajur Halang</li>
                  <li>• Barat: Desa Sukamantri</li>
                  <li>• Selatan: Gn. Salak</li>
                  <li>• Utara: Kel. Mulyaharja</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-green-800">
                  <Users className="h-5 w-5 mr-2" />
                  Demografis
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-gray-700 font-medium">Luas Wilayah</p>
                    <p className="text-2xl font-bold text-green-600">531,56 Ha</p>
                  </div>
                  <div>
                    <p className="text-gray-700 font-medium">Jumlah Penduduk</p>
                    <p className="text-2xl font-bold text-green-600">14.863 Jiwa</p>
                  </div>
                  <div>
                    <p className="text-gray-700 font-medium">Dusun</p>
                    <p className="text-2xl font-bold text-green-600">3</p>
                  </div>
                  <div>
                    <p className="text-gray-700 font-medium">RW / RT</p>
                    <p className="text-2xl font-bold text-green-600">9 / 50</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <Card className="shadow-lg">
            <CardHeader className="bg-green-600 text-white">
              <CardTitle className="flex items-center">
                <Landmark className="h-5 w-5 mr-2" />
                Visi Desa
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <p className="text-gray-700 leading-relaxed">
                "Mewujudkan Desa Sukaharja sebagai desa mandiri, sejahtera, dan berkelanjutan 
                melalui pengembangan potensi agrikultur dan digitalisasi ekonomi berbasis 
                masyarakat yang berdaya saing tinggi."
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-lg">
            <CardHeader className="bg-green-600 text-white">
              <CardTitle className="flex items-center">
                <TreePine className="h-5 w-5 mr-2" />
                Misi Desa
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <ol className="text-gray-700 space-y-2 list-decimal list-inside">
                <li>Mengembangkan sektor pertanian berkelanjutan</li>
                <li>Meningkatkan kesejahteraan masyarakat petani</li>
                <li>Mempromosikan produk lokal melalui digital</li>
                <li>Membangun infrastruktur pendukung ekonomi</li>
                <li>Melestarikan lingkungan dan budaya lokal</li>
              </ol>
            </CardContent>
          </Card>
        </div>

        {/* Agricultural Potential */}
        <Card className="shadow-lg mb-8">
          <CardHeader className="bg-green-600 text-white">
            <CardTitle>Potensi Pertanian</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <img src="/lovable-uploads/c62d382b-9962-490e-a225-3a092ca53b0b.png" alt="Nanas" className="w-12 h-12 object-cover rounded-full" />
                </div>
                <h4 className="font-semibold text-green-800 mb-2">Nanas Gati</h4>
                <p className="text-gray-600 text-sm">Varietas lokal dengan rasa manis segar dan kualitas premium</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <img src="/lovable-uploads/72c90817-7ea1-4677-a40f-66265cea474c.png" alt="Talas" className="w-12 h-12 object-cover rounded-full" />
                </div>
                <h4 className="font-semibold text-green-800 mb-2">Talas Organik</h4>
                <p className="text-gray-600 text-sm">Umbi berkualitas tinggi dengan teknik budidaya organik</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <img src="/lovable-uploads/9cdce8d7-fc10-4455-9822-c33b8810e7e4.png" alt="Tanaman Hias" className="w-12 h-12 object-cover rounded-full" />
                </div>
                <h4 className="font-semibold text-green-800 mb-2">Tanaman Hias</h4>
                <p className="text-gray-600 text-sm">Beragam jenis tanaman hias untuk dekorasi rumah dan taman</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Development Programs */}
        <Card className="shadow-lg">
          <CardHeader className="bg-green-600 text-white">
            <CardTitle>Program Pengembangan Desa</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-green-800 mb-3">Program Jangka Pendek</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Pelatihan teknologi pertanian modern</li>
                  <li>• Pengembangan platform digital marketing</li>
                  <li>• Pembentukan kelompok tani organik</li>
                  <li>• Peningkatan kualitas produk unggulan</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-green-800 mb-3">Program Jangka Panjang</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Pembangunan pusat distribusi produk</li>
                  <li>• Pengembangan agrowisata</li>
                  <li>• Sertifikasi produk organik</li>
                  <li>• Kemitraan dengan institusi penelitian</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Village;
