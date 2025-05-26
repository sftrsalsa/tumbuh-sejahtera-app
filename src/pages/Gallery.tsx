
import { Button } from "@/components/ui/button";
import { ArrowLeft, ZoomIn } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useToast } from "@/hooks/use-toast";

const Gallery = () => {
  const { toast } = useToast();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    {
      image: '/lovable-uploads/5156a629-12f0-43f1-a5ae-0d4b48acdfed.png',
      title: 'Lahan Pertanian Desa',
      description: 'Hamparan lahan pertanian yang subur di Desa Sukaharja'
    },
    {
      image: '/lovable-uploads/eb20acab-a584-4931-b44f-936e74a28cf0.png',
      title: 'Kegiatan Masyarakat Petani',
      description: 'Aktivitas harian petani dalam mengelola lahan pertanian'
    },
    {
      image: '/lovable-uploads/b8d2da31-06d1-4072-8b55-616be68b716b.png',
      title: 'Diskusi Warga Desa',
      description: 'Musyawarah desa untuk pembangunan pertanian berkelanjutan'
    },
    {
      image: '/lovable-uploads/72c90817-7ea1-4677-a40f-66265cea474c.png',
      title: 'Perkebunan Talas',
      description: 'Lahan budidaya talas organik khas Sukaharja'
    },
    {
      image: '/lovable-uploads/c62d382b-9962-490e-a225-3a092ca53b0b.png',
      title: 'Lahan Nanas',
      description: 'Perkebunan nanas gati yang menjadi komoditas unggulan'
    },
    {
      image: '/lovable-uploads/9cdce8d7-fc10-4455-9822-c33b8810e7e4.png',
      title: 'Tanaman Hias',
      description: 'Budidaya berbagai jenis tanaman hias berkualitas'
    },
    {
      image: '/lovable-uploads/7114d40d-41ab-4eb7-98a7-2649ce9ed625.png',
      title: 'Panen Talas',
      description: 'Hasil panen talas yang melimpah dan berkualitas'
    },
    {
      image: '/lovable-uploads/0256bbdc-e72c-460f-91ef-e15c217aad1e.png',
      title: 'Pusat Pembelajaran Pertanian',
      description: 'Fasilitas edukasi dan pelatihan untuk petani'
    }
  ];

  const handleImageClick = (imageSrc: string, title: string) => {
    setSelectedImage(imageSrc);
    toast({
      title: "Gambar Diperbesar",
      description: `Menampilkan: ${title}`,
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
            <h1 className="text-2xl font-bold text-green-800">Galeri Desa Sukaharja</h1>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-green-600 to-green-700 text-white rounded-lg p-8 mb-8">
          <h2 className="text-3xl font-bold mb-4">Dokumentasi Kegiatan & Potensi Desa</h2>
          <p className="text-lg">Lihat berbagai kegiatan dan potensi yang dimiliki Desa Sukaharja melalui dokumentasi visual</p>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {galleryImages.map((item, index) => (
            <div 
              key={index} 
              className="relative overflow-hidden rounded-lg shadow-lg group cursor-pointer"
              onClick={() => handleImageClick(item.image, item.title)}
            >
              <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                <ZoomIn className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <h3 className="text-white font-semibold text-sm mb-1">{item.title}</h3>
                <p className="text-white/80 text-xs">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Image Modal */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl max-h-full">
              <img 
                src={selectedImage} 
                alt="Enlarged view"
                className="w-full h-auto max-h-screen object-contain rounded-lg"
              />
              <Button 
                className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white"
                onClick={() => setSelectedImage(null)}
              >
                ✕
              </Button>
            </div>
          </div>
        )}

        {/* Gallery Stats */}
        <div className="mt-12 bg-white rounded-lg shadow-lg p-8">
          <h3 className="text-2xl font-bold text-green-800 mb-6 text-center">Tentang Galeri Kami</h3>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">100+</div>
              <p className="text-gray-600">Foto Dokumentasi</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">25+</div>
              <p className="text-gray-600">Kegiatan Terdokumentasi</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">15+</div>
              <p className="text-gray-600">Lokasi Pertanian</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">5+</div>
              <p className="text-gray-600">Tahun Dokumentasi</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
