import React from 'react';

const MemberCard = ({ member }) => (
  <div className="bg-white rounded-lg shadow-lg p-6 transition-transform duration-200 transform hover:scale-105">
    <img
      src={`/api/placeholder/200/200`}
      alt={`成員${member}`}
      className="w-full h-48 object-cover rounded-md mb-4"
    />
    <h3 className="text-xl font-semibold">成員名稱{member}</h3>
    <p className="text-gray-600">"這是成員{member}的話，分享他們的想法和經歷。"</p>
  </div>
);

export default function Members() {
  return (
    <section id="members" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">成員介紹</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((member) => (
            <MemberCard key={member} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}
