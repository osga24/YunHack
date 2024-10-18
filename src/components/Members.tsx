import React from 'react';

// 定義 Member 的類型
type Member = {
  id: number;
  name: string;
  role: string;
  image: string;
  description: string;
};

const MemberCard = ({ member }: { member: Member }) => (
  <div className="bg-white rounded-lg shadow-lg p-6 transition-transform duration-200 transform hover:scale-105">
    <div className="aspect-square w-full mb-4 overflow-hidden rounded-md">
      <img
        src={member.image}
        alt={`${member.name}的照片`}
        className="w-full h-full object-cover"
      />
    </div>
    <h3 className="text-xl font-semibold">{member.name}</h3>
    <p className="text-gray-600 mb-2">{member.role}</p>
    <p className="text-gray-600">{member.description}</p>
  </div>
);

export default function Members() {
  return (
    <section id="members" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">成員介紹</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <MemberCard
            member={{
              id: 1,
              name: "OsGa",
              role: "社長",
              image: "images/members/osga.png",
              description: "為什麼要辦雲科資安社，因為我考不上台科大。"
            }}
          />
          <MemberCard
            member={{
              id: 2,
              name: "泰瑞",
              role: "副社長",
              image: "https://stickershop.line-scdn.net/stickershop/v1/product/868/LINEStorePC/main.png?v=8",
              description: "都逼嘟逼嘟哇 都逼嘟逼嘟哇 特務P"
            }}
          />
          <MemberCard
            member={{
              id: 3,
              name: "鍾佳播",
              role: "副社長",
              image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBxdrZbBnno8pgjgXtZNGaIaHawApQtj0CQA&s",
              description: "惡魔貓男..海龍王彼得..卑鄙原之柱..你今晚的噩夢"
            }}
          />
          {/* 可以繼續手動添加更多成員 */}
        </div>
      </div>
    </section>
  );
}
