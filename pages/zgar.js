import zgarPot from '../public/zgar-pot.jpg';
import zgarPotHeader from '../public/zgar-pot-header.jpg';
import vercel from '../public/vercel.svg';
import Image from 'next/image';

export default function Zegar({ url }) {
  const flavor = [{ en: 'Grape' }];
  const fifthPot = [
    '香芋冰淇淋',
    '龙眼冰',
    '西瓜冰',
    '青提',
    '棒棒冰',
    '白玉冰',
    '情人果',
    '冰咖啡',
  ];
  const sixthPot = [
    '哈密瓜',
    '橘子汽水',
    '一颗西梅',
    '清香桂花',
    '香芋冰淇淋',
    '冰镇蜜柚茶',
    '金桔百香果',
    '柠檬冰',
    '冰水',
    '芭乐',
    '绿豆冰',
    '菠萝橙子',
    '草莓冰淇淋',
    '荔枝',
    '冻柠茶',
    '香桃冰',
    '青提',
    '桃气乌龙',
    '茉莉龙井',
    '杨桃',
  ];
  return (
    <div>
      <Image src={zgarPotHeader} alt={vercel} class='w-full' />
      <div class='flex flex-wrap'>
        {fifthPot.map((pot) => (
          <div
            key={pot}
            class='w-1/3 sm:w-1/4 lg:w-1/5 p-3 flex items-center justify-center'
          >
            <div
              key={pot}
              class=' px-2 py-1 rounded-lg border-solid border-2 flex items-center justify-center'
            >
              <p class='font-semibold'>{pot}</p>
            </div>
          </div>
        ))}
      </div>
      <div class='flex items-center justify-center'>
        <p class='font-medium text-3xl'>六代如下</p>
      </div>
      <div class='flex flex-wrap'>
        {sixthPot.map((pot) => (
          <div
            key={pot}
            class='w-1/3 sm:w-1/4 lg:w-1/5 p-3 flex items-center justify-center'
          >
            <div
              key={pot}
              class=' px-2 py-1 rounded-lg border-solid border-2 flex items-center justify-center'
            >
              <p class='font-semibold'>{pot}</p>
            </div>
          </div>
        ))}
      </div>

      {/* <Image src={url} alt={vercel} width={300} height={300} /> */}
    </div>
  );
}

export async function getStaticProps() {
  const response = await fetch(`${process.env.SERVER}/api/test`);
  let url = await response.json();
  return { props: { url } };
}
