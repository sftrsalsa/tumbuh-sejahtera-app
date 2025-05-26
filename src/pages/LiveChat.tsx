
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Send, MessageCircle, Phone, Mail, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useToast } from "@/hooks/use-toast";

const LiveChat = () => {
  const { toast } = useToast();
  const [message, setMessage] = useState('');
  const [chatMessages, setChatMessages] = useState([
    {
      id: 1,
      sender: 'admin',
      message: 'Selamat datang di layanan customer service Suka Belanja di Harja! Ada yang bisa kami bantu?',
      time: '10:00'
    }
  ]);

  const handleSendMessage = () => {
    if (message.trim()) {
      const newMessage = {
        id: chatMessages.length + 1,
        sender: 'user',
        message: message,
        time: new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })
      };
      
      setChatMessages([...chatMessages, newMessage]);
      setMessage('');
      
      // Simulate admin response
      setTimeout(() => {
        const adminResponse = {
          id: chatMessages.length + 2,
          sender: 'admin',
          message: 'Terima kasih atas pesan Anda. Tim kami akan segera membantu menjawab pertanyaan Anda.',
          time: new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })
        };
        setChatMessages(prev => [...prev, adminResponse]);
      }, 1000);

      toast({
        title: "Pesan Terkirim",
        description: "Tim customer service akan segera merespon",
      });
    }
  };

  const quickQuestions = [
    'Bagaimana cara memesan produk?',
    'Apa saja metode pembayaran yang tersedia?',
    'Berapa lama waktu pengiriman?',
    'Apakah ada garansi untuk produk tanaman hias?',
    'Bagaimana cara menjadi mitra reseller?'
  ];

  const handleQuickQuestion = (question: string) => {
    setMessage(question);
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
            <h1 className="text-2xl font-bold text-green-800">Live Chat & Customer Service</h1>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="shadow-lg">
              <CardHeader className="bg-green-600 text-white">
                <CardTitle className="flex items-center">
                  <MessageCircle className="h-5 w-5 mr-2" />
                  Informasi Kontak
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-green-600" />
                  <div>
                    <p className="font-medium">Telepon</p>
                    <p className="text-gray-600">+62 812-3456-7890</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-green-600" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-gray-600">info@sukabelanjadharja.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-green-600" />
                  <div>
                    <p className="font-medium">Jam Operasional</p>
                    <p className="text-gray-600">Senin - Sabtu: 08:00 - 17:00</p>
                    <p className="text-gray-600">Minggu: 09:00 - 15:00</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader className="bg-green-600 text-white">
                <CardTitle>Pertanyaan Cepat</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-2">
                  {quickQuestions.map((question, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      className="w-full text-left text-sm p-3 h-auto"
                      onClick={() => handleQuickQuestion(question)}
                    >
                      {question}
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Chat Interface */}
          <div className="lg:col-span-2">
            <Card className="shadow-lg h-[600px] flex flex-col">
              <CardHeader className="bg-green-600 text-white">
                <CardTitle className="flex items-center">
                  <MessageCircle className="h-5 w-5 mr-2" />
                  Chat dengan Customer Service
                  <div className="ml-auto flex items-center">
                    <div className="w-3 h-3 bg-green-400 rounded-full mr-2"></div>
                    <span className="text-sm">Online</span>
                  </div>
                </CardTitle>
              </CardHeader>
              
              {/* Chat Messages */}
              <CardContent className="flex-1 p-6 overflow-y-auto">
                <div className="space-y-4">
                  {chatMessages.map((msg) => (
                    <div
                      key={msg.id}
                      className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                          msg.sender === 'user'
                            ? 'bg-green-600 text-white'
                            : 'bg-gray-200 text-gray-800'
                        }`}
                      >
                        <p className="text-sm">{msg.message}</p>
                        <p className={`text-xs mt-1 ${
                          msg.sender === 'user' ? 'text-green-100' : 'text-gray-500'
                        }`}>
                          {msg.time}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>

              {/* Message Input */}
              <div className="p-6 border-t">
                <div className="flex space-x-2">
                  <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Ketik pesan Anda..."
                    className="flex-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  />
                  <Button 
                    onClick={handleSendMessage}
                    className="bg-green-600 hover:bg-green-700"
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-12">
          <Card className="shadow-lg">
            <CardHeader className="bg-green-600 text-white">
              <CardTitle>Frequently Asked Questions (FAQ)</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-green-800 mb-2">Q: Bagaimana cara memesan produk?</h4>
                  <p className="text-gray-600 mb-4">A: Anda dapat memesan melalui website, chat customer service, atau menghubungi nomor telepon kami langsung.</p>
                  
                  <h4 className="font-semibold text-green-800 mb-2">Q: Apa metode pembayaran yang tersedia?</h4>
                  <p className="text-gray-600 mb-4">A: Kami menerima transfer bank, e-wallet (OVO, GoPay, DANA), dan cash on delivery untuk area tertentu.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-green-800 mb-2">Q: Berapa lama proses pengiriman?</h4>
                  <p className="text-gray-600 mb-4">A: Pengiriman dalam kota 1-2 hari, luar kota 2-5 hari kerja tergantung lokasi dan ekspedisi yang dipilih.</p>
                  
                  <h4 className="font-semibold text-green-800 mb-2">Q: Apakah ada garansi untuk tanaman hias?</h4>
                  <p className="text-gray-600 mb-4">A: Ya, kami memberikan garansi 7 hari untuk tanaman hias dengan syarat dan ketentuan yang berlaku.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default LiveChat;
