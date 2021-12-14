import { CSSProperties } from 'react';
import { Carousel, Image } from 'antd';
import PageWithBar from '@/component/PageWithBar/PageWithBar';
import './guide.less';

// import RC from '@/assets/imgs/RC.jpg';
// import RC1 from '@/assets/imgs/RC1.jpg';
// import RC2 from '@/assets/imgs/RC2.jpg';
// import RC3 from '@/assets/imgs/RC3.jpg';

const RC = './static/RC.970c46a6.jpg';
const RC1 = './static/RC1.2806b8c9.jpg';
const RC2 = './static/RC2.b7e31c5c.jpg';
const RC3 = './static/RC3.65baf0d3.jpg';

interface TagContainer {
  title: string;
  tagItems: string[];
}

const prefix = 'guide-';

const Home = () => {
  const contentStyle: CSSProperties = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };

  const imgStyle: CSSProperties = {
    height: '100%',
    margin: '0  auto',
  };

  const tagContainerList: TagContainer[] = [
    {
      title: '自我调适',
      tagItems: [
        '克服焦虑',
        '战胜恐惧',
        '适应变化',
        '克服焦虑',
        '战胜恐惧',
        '适应变化',
        '克服焦虑',
        '战胜恐惧',
      ],
    },
    {
      title: '健康生活',
      tagItems: ['克服焦虑', '战胜恐惧', '适应变化', '克服焦虑', '战胜恐惧'],
    },
    {
      title: '放松心情',
      tagItems: ['暖心文章', '经典电影', '动听音乐'],
    },
  ];

  return (
    <PageWithBar>
      <div className={prefix + 'title'}>心理指导</div>
      <Carousel style={{ width: '90%', margin: '0 auto' }}>
        <div>
          <div style={contentStyle}>
            <img style={imgStyle} src={RC} alt="1" />
          </div>
        </div>
        <div>
          <div style={contentStyle}>
            <img style={imgStyle} src={RC1} alt="2" />
          </div>
        </div>
        <div>
          <div style={contentStyle}>
            <img style={imgStyle} src={RC2} alt="3" />
          </div>
        </div>
        <div>
          <div style={contentStyle}>
            <img style={imgStyle} src={RC3} alt="4" />
          </div>
        </div>
      </Carousel>
      <div className={prefix + 'tag-container-list'}>
        {tagContainerList.map((tagContainer, index) => {
          return (
            <div
              className={prefix + 'tag-container'}
              key={tagContainer.title + index}
            >
              <div className={prefix + 'tag-container-title'}>
                {tagContainer.title}
              </div>
              <div className={prefix + 'tag-content'}>
                {tagContainer.tagItems.map((item, index) => {
                  return (
                    <div className={prefix + 'tag'} key={item + index}>
                      {item}
                    </div>
                  );
                })}
                <div className={prefix + 'tag-blank'} />
              </div>
            </div>
          );
        })}
      </div>
    </PageWithBar>
  );
};

export default Home;
