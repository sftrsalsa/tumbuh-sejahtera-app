
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Users, Target, Eye, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  const teamMembers = [
    {
      name: 'Salsa Nabila Safitri',
      role: 'Kepala Desa & Project Leader',
      image: '/lovable-uploads/eb20acab-a584-4931-b44f-936e74a28cf0.png',
      description: 'Memimpin pengembangan website dan koordinasi tim untuk kemajuan desa'
    },
    {
      name: 'AWEU',
      role: 'Developer & UI/UX Designer',
      image: '/lovable-uploads/b8d2da31-06d1-4072-8b55-616be68b716b.png',
      description: 'Bertanggung jawab atas desain dan pengembangan antarmuka website'
    },
    {
      name: 'Budi Santoso',
      role: 'Content Creator & Documentation',
      image: '/lovable-uploads/0256bbdc-e72c-460f-91ef-e15c217aad1e.png',
      description: 'Mengelola konten edukatif dan dokumentasi kegiatan desa'
    },
    {
      name: 'Dewi Lestari',
      role: 'Marketing & Partnership',
      image: '/lovable-uploads/5156a629-12f0-43f1-a5ae-0d4b48acdfed.png',
      description: 'Mengembangkan strategi pemasaran dan kemitraan untuk produk desa'
    },
    {
      name: 'Agus Widodo',
      role: 'Technical Support & Maintenance',
      image: '/lovable-uploads/72c90817-7ea1-4677-a40f-66265cea474c.png',
      description: 'Memastikan website berjalan lancar dan memberikan dukungan teknis'
    },
    {
      name: 'Rina Marlina',
      role: 'Community Manager & Research',
      image: '/lovable-uploads/7114d40d-41ab-4eb7-98a7-2649ce9ed625.png',
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
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="font-bold text-lg text-green-800 mb-2">{member.name}</h4>
                  <p className="text-green-600 font-semibold mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Technology Stack */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center justify-center mb-6">
            <Award className="h-8 w-8 text-green-600 mr-3" />
            <h3 className="text-2xl font-bold text-green-800">Teknologi yang Digunakan</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div className="p-4">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl font-bold text-blue-600">R</span>
              </div>
              <h4 className="font-semibold text-gray-800">React</h4>
              <p className="text-sm text-gray-600">Frontend Framework</p>
            </div>
            <div className="p-4">
              <div className="bg-cyan-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl font-bold text-cyan-600">T</span>
              </div>
              <h4 className="font-semibold text-gray-800">Tailwind CSS</h4>
              <p className="text-sm text-gray-600">Styling Framework</p>
            </div>
            <div className="p-4">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl font-bold text-purple-600">V</span>
              </div>
              <h4 className="font-semibold text-gray-800">Vite</h4>
              <p className="text-sm text-gray-600">Build Tool</p>
            </div>
            <div className="p-4">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl font-bold text-green-600">L</span>
              </div>
              <h4 className="font-semibold text-gray-800">Lovable</h4>
              <p className="text-sm text-gray-600">Development Platform</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
