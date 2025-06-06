
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, Target, Eye } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const teamMembers = [
    {
      name: 'Mohamad Damar Purnama',
      role: 'Founder & CEO',
      image: '/lovable-uploads/4cce6647-837c-4894-8faf-d111a8e1bac7.png',
      description: 'Memimpin pengembangan website dan koordinasi tim untuk kemajuan desa'
    },
    {
      name: 'Salsa Nabila Safitri',
      role: 'Chief Technology Officer',
      image: '/lovable-uploads/26dc007b-c1dd-44dc-822d-6ba64efd5f5d.png',
      description: 'Bertanggung jawab atas desain dan pengembangan antarmuka website'
    },
    {
      name: 'Zahara Aini Kusuma',
      role: 'Content Creator & Documentation Head Of Agriculture',
      image: '/lovable-uploads/d7b1b8e5-c288-4b91-8c01-ac1da18c97c5.png',
      description: 'Mengelola konten edukatif dan dokumentasi kegiatan desa'
    },
    {
      name: 'Hilmia Salsabila',
      role: 'Marketing & Partnership',
      image: '/lovable-uploads/18969d5a-e64f-42d8-b3e9-50b88269149e.png',
      description: 'Mengembangkan strategi pemasaran dan kemitraan untuk produk desa'
    },
    {
      name: 'Nadya Tendra Sikki',
      role: 'Technical Support & Maintenance',
      image: '/lovable-uploads/9ad24447-4f16-4162-9885-fdb43dfeeee1.png',
      description: 'Memastikan website berjalan lancar dan memberikan dukungan teknis'
    },
    {
      name: 'Muhammad Azhar Ahzami',
      role: 'Community Manager & Research',
      image: '',
      description: 'Mengelola komunitas online dan penelitian kebutuhan masyarakat'
    }
  ];

  const stats = [
    { number: '500+', label: 'Penduduk Desa' },
    { number: '3', label: 'Komoditas Unggulan' },
    { number: '5+', label: 'Tahun Pengembangan' },
    { number: '100+', label: 'Keluarga Petani' }
  ];

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
            <h1 className="text-2xl font-bold text-green-800">Tentang Kami</h1>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-green-600 to-green-700 text-white rounded-lg p-8 mb-8">
          <h2 className="text-3xl font-bold mb-4">Website Desa Sukaharja</h2>
          <p className="text-lg">Platform digital yang menghubungkan masyarakat desa dengan dunia modern untuk kemajuan bersama</p>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-center mb-4">
                <Target className="h-8 w-8 text-green-600 mr-3" />
                <h3 className="text-2xl font-bold text-green-800">Misi Kami</h3>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li>• Menyediakan platform digital untuk promosi produk lokal</li>
                <li>• Meningkatkan akses informasi dan edukasi pertanian</li>
                <li>• Memfasilitasi kemitraan dan kolaborasi</li>
                <li>• Mendokumentasikan potensi dan kegiatan desa</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-center mb-4">
                <Eye className="h-8 w-8 text-green-600 mr-3" />
                <h3 className="text-2xl font-bold text-green-800">Visi Kami</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Menjadikan Desa Sukaharja sebagai desa digital terdepan yang 
                mandiri, sejahtera, dan berkelanjutan melalui pemanfaatan teknologi 
                informasi untuk pemberdayaan masyarakat dan pengembangan ekonomi lokal.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Statistics */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h3 className="text-2xl font-bold text-green-800 mb-8 text-center">Data Desa Sukaharja</h3>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-3xl font-bold text-green-600 mb-2">{stat.number}</div>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-green-800 mb-4">Tim Pengembang</h3>
            <p className="text-lg text-gray-600">6 anggota tim yang berdedikasi untuk kemajuan Desa Sukaharja</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                    {member.image ? (
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                        <span className="text-gray-500 text-xs">Foto belum tersedia</span>
                      </div>
                    )}
                  </div>
                  <h4 className="font-bold text-lg text-green-800 mb-2">{member.name}</h4>
                  <p className="text-green-600 font-semibold mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
