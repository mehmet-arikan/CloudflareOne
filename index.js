import React, { useState } from 'react';
import { Table } from '@/components/ui/table';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Search, Calendar, Download, Filter } from 'lucide-react';

const GatewayLogs = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  // Örnek log verileri
  const logs = [
    {
      id: 1,
      timestamp: '2024-12-22 14:30:25',
      userName: 'ahmet.yilmaz',
      sourceIP: '192.168.1.100',
      destination: 'example.com',
      action: 'İzin Verildi',
      category: 'İş',
      policy: 'Genel Erişim'
    },
    {
      id: 2,
      timestamp: '2024-12-22 14:28:15',
      userName: 'mehmet.demir',
      sourceIP: '192.168.1.101',
      destination: 'facebook.com',
      action: 'Engellendi',
      category: 'Sosyal Medya',
      policy: 'Sosyal Medya Engeli'
    },
    {
      id: 3,
      timestamp: '2024-12-22 14:25:10',
      userName: 'ayse.kaya',
      sourceIP: '192.168.1.102',
      destination: 'docs.google.com',
      action: 'İzin Verildi',
      category: 'Üretkenlik',
      policy: 'Google Workspace'
    }
  ];

  const filteredLogs = logs.filter(log => 
    Object.values(log).some(value => 
      value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Gateway Aktivite Logları</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4 mb-6">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
                <Input
                  placeholder="Ara..."
                  className="pl-8"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            <Button variant="outline" className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              Tarih Seç
            </Button>
            <Button variant="outline" className="flex items-center gap-2">
              <Filter className="h-4 w-4" />
              Filtrele
            </Button>
            <Button variant="outline" className="flex items-center gap-2">
              <Download className="h-4 w-4" />
              Dışa Aktar
            </Button>
          </div>

          <div className="rounded-md border">
            <Table>
              <thead>
                <tr>
                  <th className="p-2">Zaman</th>
                  <th className="p-2">Kullanıcı</th>
                  <th className="p-2">Kaynak IP</th>
                  <th className="p-2">Hedef</th>
                  <th className="p-2">İşlem</th>
                  <th className="p-2">Kategori</th>
                  <th className="p-2">Politika</th>
                </tr>
              </thead>
              <tbody>
                {filteredLogs.map((log) => (
                  <tr key={log.id} className="hover:bg-gray-50">
                    <td className="p-2">{log.timestamp}</td>
                    <td className="p-2">{log.userName}</td>
                    <td className="p-2">{log.sourceIP}</td>
                    <td className="p-2">{log.destination}</td>
                    <td className="p-2">
                      <span className={`px-2 py-1 rounded-full text-sm ${
                        log.action === 'İzin Verildi' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-red-100 text-red-800'
                      }`}>
                        {log.action}
                      </span>
                    </td>
                    <td className="p-2">{log.category}</td>
                    <td className="p-2">{log.policy}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default GatewayLogs;
