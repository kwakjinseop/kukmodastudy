import React, { useState } from 'react';

const DropdownMenu = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index:any) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <div style={{ display: 'flex', position: 'relative' }}>
      <div 
        onMouseEnter={() => handleMouseEnter(0)} 
        onMouseLeave={handleMouseLeave}
        style={{ marginRight: '10px' }}
      >
        <button style={{ padding: '16px', fontSize: '16px' }}>국비 부트 캠프</button>
        {hoveredIndex === 0 && (
          <div 
            style={{
              display: 'block',
              position: 'absolute',
              backgroundColor: '#f9f9f9',
              minWidth: '160px',
              boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)',
              zIndex: 1,
              marginTop: '5px' // 버튼과 메뉴 사이의 간격 추가
            }}
          >
            <a href="#" style={{ padding: '12px 16px', display: 'block' }}>국비 부트 캠프 정보</a>
            <a href="#" style={{ padding: '12px 16px', display: 'block' }}>국비 부트 캠프 후기</a>
            <a href="#" style={{ padding: '12px 16px', display: 'block' }}>국비 부트 캠프 컨텐츠</a>
            <a href="#" style={{ padding: '12px 16px', display: 'block' }}>부트 캠프 개강정보 캘린더</a>
          </div>
        )}
      </div>

      <div 
        onMouseEnter={() => handleMouseEnter(1)} 
        onMouseLeave={handleMouseLeave}
        style={{ marginRight: '10px' }}
      >
        <button style={{ padding: '16px', fontSize: '16px' }}>스터디 및 프로젝트 정보</button>
        {hoveredIndex === 1 && (
          <div 
            style={{
              display: 'block',
              position: 'absolute',
              backgroundColor: '#f9f9f9',
              minWidth: '160px',
              boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)',
              zIndex: 1,
              marginTop: '5px'
            }}
          >
            <a href="#" style={{ padding: '12px 16px', display: 'block' }}>스터디, 플젝 팀원 모집</a>
            <a href="#" style={{ padding: '12px 16px', display: 'block' }}>국모다it 메타버스 캠퍼스</a>
            <a href="#" style={{ padding: '12px 16px', display: 'block' }}>스터디/플젝 후기</a>
            <a href="#" style={{ padding: '12px 16px', display: 'block' }}>왜 모여서 스터디를 해야 할까요?</a>
          </div>
        )}
      </div>

      <div 
        onMouseEnter={() => handleMouseEnter(2)} 
        onMouseLeave={handleMouseLeave}
      >
        <button style={{ padding: '16px', fontSize: '16px' }}>취업 및 공모전 정보</button>
        {hoveredIndex === 2 && (
          <div 
            style={{
              display: 'block',
              position: 'absolute',
              backgroundColor: '#f9f9f9',
              minWidth: '160px',
              boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)',
              zIndex: 1,
              marginTop: '5px'
            }}
          >
            <a href="#" style={{ padding: '12px 16px', display: 'block' }}>공모전 소식</a>
            <a href="#" style={{ padding: '12px 16px', display: 'block' }}>채용정보 게시판</a>
            <a href="#" style={{ padding: '12px 16px', display: 'block' }}>국모다 it취업 개꿀팁</a>
          </div>
        )}
      </div>
    </div>
  );
};

export default DropdownMenu;