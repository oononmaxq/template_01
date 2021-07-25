import Image from "next/image";

const Message = () => {
  return (
    <section id="message">
      <div className="bg-gray-800 inline-block">
        <p className="md:w-2/4 md:float-right">
          <Image src="/sec02_01.jpg" />
        </p>
        <div className="grid justify-items-center">
          <div className="mx-10 mb-10">
            <h2>MESSAGE</h2>
            <p>
              ちかごろ世間で日本歴史の科学的研究ということがしきりに叫ばれている。科学的研究というのが近代史学の学問的方法による研究という意義であるならば、これは史学の学徒の間においては一般に行われていることであるから、今さらこと新しくいう。
            </p>
          </div>
        </div>
      </div>
      <div className="bg-gray-800 inline-block">
        <p className="md:w-2/4 md:float-left">
          <Image src="/sec02_02.jpg" />
        </p>
        <div className="grid justify-items-center">
          <div className="mx-10 mb-10">
            <h2>MESSAGE</h2>
            <p>
              日本歴史の科学的研究ということがしきりに叫ばれている。科学的研究というのが近代史学の学問的方法による研究という意義であるならば、これは史学の学徒の間においては一般に行われていることであるから、今さらこと新しくいう。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Message;
