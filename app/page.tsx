"use client"

import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react';


export default function Home() {

  const [Projectinfo, SetProjectinfo] = useState(["ProjectName", "Descriptions", ""]);


  const [Project_Name] = useState(["SANDBLOCK แทนแกรมสร้างโลก", "Dream To Faculty", "COMSCI CHECK", "GUBGURU", "PIZZAPET"])
  const [Project_Details] = useState([
          `เป็นเกมที่สิ่งปลูกสร้าง ยานพาหนะ สิ่งมีชีวิต ถูกสร้างจาก Tangram Tangram คือ
          การนำรูปทรงเรขาคณิต7ชิ้นมาต่อจนกลายเป็นสิ่งของ เมื่อต่อเสร็จรแล้วเราสามารถตกแต่งด้วยการลงสี กับ
          ติดสติกเกอร์ หลังจานั้นนำสิ่งของไปวางตกแต่งบนเกาะ หรือ วางบนน้ำได้ และ สิ่งของบางประเภทเช่น เรือ
          จะสามาขับได้ บ้านจะสามารถเข้าไปนอนได้ และ ยังสามารถตกแต่เกาะ หรือ เดินเล่น ร่วมกันกับเพื่อนในโหมด
          Multiplayerได้` 
          ,`เว็บแอปพิเคชันที่จะค้นหาคณะที่เหมาะกับตัวเองโดยใช้โมเดลพหุปัญญา เป็นการทำวิจัยเกี่ยวกับการจัดกลุ่มคณะ โดยแบ่งเป็น 5 กลุ่มในแต่ละกลุ่มจะนำจุดเด่น และ จุดด้อยของพหุปัญญาทั้ง 7 ด้านมาวิเคราะห์เป็นโมเดล  และ นำโมเดลไปใส่บนเว็บแอปพลิเคชัน`
          , `เว็บแอปพลิเคชัน ยืม/คืน อุปกรณ์ ของศูนย์วิทย์-คอมฯ โรงเรัยนสตรีอ่างทอง`
          , `เว็บแอปพลิเคชันจัดสรรงบประมาณโดยใช้ AI โดยจะจัดสรรการซื้อวัตถุดิบหรือสินค้าในการบริโภคสำหรับ 3 วัน โดยวัตถุดิบหรือสินค้าด้านการบริโภคจะเป็นวัตถุดิบที่มีอยู่ในชุมชนที่เราอาศัยอยู่โดยให้คนในชุมชนประกาศขายวัตถุดิบลงบนเว็บแอปพลิเคชันของเราเพื่อส่งเสริมให้คนในชุมชนมีรายได้มากขึ้นเพื่อทำให้ผู้ใช้งานมีสุขภาพที่ดีขึ้นและมีเงินเพียงพอในการใช้จ่ายต่างๆ ในชีวิตประจำวัน`
          , `แอปพลิเคชันช่วยลดการเล่นสมาร์ตโฟนโดยให้ผู้เข้าใช้งานนำเวลาที่ไม่ได้เล่นสมาร์ตโฟนนําไปทำกิจกรรมที่ต้องการ
          เช่น “การวิ่ง” โดยการวิ่งจะใช้ GPS และการนับก้าว 
          “การอ่านหนังสือ” โดยการอ่านหนังสือระบบจะทำการเปิดกล้องและใช้ AI ในการตรวจสอบว่าหน้าอยู่ในกรอบหรือไม่
          โดยนําคะแนนที่ได้จากการทำกิจกรรม ไปเลี้ยงสัตว์เลี้ยง 
          และซื้อของตกแต่งภายในแอปพลิเคชัน`])

  const [Project_Link] = useState([
    "http://os.sa.ac.th/comsci/detail.php?pid=95"
    , "http://app.sa.ac.th/dream-to-faculty/"
    , "https://comsci-check.vercel.app/"
    , "https://drive.google.com/file/d/1kHVlkSJVTyoYq09uxhqi7llymqsgMHb3/view?usp=sharing"
    , "http://os.sa.ac.th/comsci/detail.php?pid=87"])

  const OpenModals = (index: number) => {
    SetProjectinfo([Project_Name[index], Project_Details[index], Project_Link[index]]);
    const element = document.getElementById("modals"); if (element) element.style.display = "block"

  };

  useEffect(() => {
    const modal = document.getElementById("modals");
    const handleClick = (event: MouseEvent) => {
      if (modal && event.target === modal) {
        modal.style.display = "none";
      }
    };

    window.addEventListener("click", handleClick);

    // Cleanup the event listener when the component is unmounted
    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, []);


  return (
    <div>
      <header className="bg-white fixed w-full shadow-sm z-3 left-0 top-0 shadow-xl">
        <a href="" className="block float-left px-1.2 py-1 text-[#71C55D] font-bold	px-[20px] py-[17px] text-[20px]">PARDPARW</a>
        <input className="MenuBtn peer" type="checkbox" id="menu-btn"></input>
        <label className="py-[28px] px-[20px] float-right menu-icon cursor-pointer lg:hidden" htmlFor="menu-btn">
          <span className="HamburgerNav"></span>
        </label>
        <ul className="divide-x divide-[#f4f4f4] clear-both overflow-hidden lg:clear-none transition-[max-height] transition-300 ease-out peer-checked:max-h-[300px] max-h-0 lg:float-right lg:clear-none lg:max-h-none">
          <li className="lg:float-left"><a className="p-[20px] block bg-[#cecece50] text-[#71C55D] duration-300 hover:bg-[#71C55D] hover:text-[#ffffff] font-bold" href="#Home">Home</a></li>
          <li className="lg:float-left"><a className="p-[20px] block bg-[#cecece50] text-[#71C55D] duration-300 hover:bg-[#71C55D] hover:text-[#ffffff] font-bold" href="#Award">Award</a></li>
          <li className="lg:float-left"><a className="p-[20px] block bg-[#cecece50] text-[#71C55D] duration-300 hover:bg-[#71C55D] hover:text-[#ffffff] font-bold" href="#Projects">Project</a></li>
          <li className="lg:float-left"><a className="p-[20px] block bg-[#cecece50] text-[#71C55D] duration-300 hover:bg-[#71C55D] hover:text-[#ffffff] font-bold" href="#Contact">Contact</a></li>
        </ul>
      </header>
      <p id="Home" className='invisible'>-</p>
      <div className="flex flex-col gap-[20px] justify-center w-[80%] m-auto mt-[2cm]" >
        <section className="grid justify-center content-center gap-[25%] grid-flow-col">
          <h1 className='mt-[25%] text-[24px] font-bold'>Pheemmapong Rodvaree</h1>
          <Image className='shadow-xl	rounded-[50%] max-w-[150px]'
            src="http://app.sa.ac.th/gubguru/pages/registerseller/uploads/Portfolio/672b8903e3e29.png"
            width={150}
            height={150}
            alt="Profile"
          />
        </section>
        <section>
          <h2 className='text-[24px] font-bold'>About ME</h2>
          <p>&emsp; My name is Pheemmapong Rodvaree, a 1st year student in the COM-SCI at Kasetsart University, Thailand. I started
            coding in 2020 and am interested in learning new technologies.</p>
        </section>

        <section>
          <h2 className='text-[24px] font-bold'>Education</h2>
          <p className='font-bold'>Kasetsart University (2025-present)</p>
          <p> &emsp; Bachelor of Computer - Science </p>
          <p className='font-bold'>Satri Angthong School (2022-2025)</p>
          <p> &emsp; Science - Mathematics - Computer programs</p>
        </section>

        <section id="Award">
          <h2 className='text-[24px] font-bold'>Award & Competition</h2>

          <p className='font-bold'>National Software Contest 26</p>
          <p>&emsp; The 3rd place winner in project competition
            <br /> &emsp; Project competition
          </p>

          <p className='font-bold'>The International Conference on Cybernetics and Innovations (ICCI 2024)</p>
          <p>&emsp; Publish the project
            <br /> &emsp; Conference
          </p>

          <p className='font-bold'>KidBright Innovation by Alumni</p>
          <p>&emsp; The 2nd place winner in project competition
            <br /> &emsp; Project competition
          </p>

          <p className='font-bold'>RSU Academic Competition Future Design 2023</p>
          <p>&emsp; The Compliment place in project competition in First Round
            <br /> &emsp; Project competition
          </p>

          <p className='font-bold'>AFTERKLASS Business KAMP 4th-year</p>
          <p>&emsp; First round of project competition
            <br /> &emsp; Project competition
          </p>

          <p className='font-bold'>National Software Contest 25</p>
          <p>&emsp; First round of project competition
            <br /> &emsp; Project competition
          </p>
        </section>

        <h2 className='text-[24px] font-bold' id="Projects">Projects</h2>

        <section className='flex flex-wrap justify-center gap-[20px]'>
          <div onClick={() => OpenModals(0)} className='flex justify-center content-center w-[10cm] h-[10cm] cusor-pointer bg-[#000] box-border rounded-[16px] shadow-xl cursor-pointer'>
            <Image className='max-w-[100%] max-h-[100%] object-contain rounded-[16px]'
              src={"http://app.sa.ac.th/gubguru/pages/registerseller/uploads/Portfolio/672b7cec8d1d7.png"}
              width={350}
              height={350}
              alt='Award' />

          </div>
          <div onClick={() => OpenModals(1)} className='flex justify-center content-center w-[10cm] h-[10cm] cusor-pointer bg-[#1a1a1a] box-border rounded-[16px] shadow-xl cursor-pointer'>
            <Image className='max-w-[100%] max-h-[100%] object-contain rounded-[16px]' src={"http://app.sa.ac.th/gubguru/pages/registerseller/uploads/Portfolio/672b7cfbdb99a.png"} width={350} height={350} alt='Award' />
          </div>
          <div onClick={() => OpenModals(2)} className='flex justify-center content-center w-[10cm] h-[10cm] cusor-pointer bg-[#fff] box-border rounded-[16px] shadow-xl cursor-pointer'>
            <Image className='max-w-[100%] max-h-[100%] object-contain rounded-[16px]' src={"http://app.sa.ac.th/gubguru/pages/registerseller/uploads/Portfolio/672b7cefc965a.png"} width={350} height={350} alt='Award' />
          </div>
          <div onClick={() => OpenModals(3)} className='flex justify-center content-center w-[10cm] h-[10cm] cusor-pointer bg-[#b0e483] box-border rounded-[16px] shadow-xl cursor-pointer'>
            <Image className='max-w-[100%] max-h-[100%] object-contain rounded-[16px]' src={"http://app.sa.ac.th/gubguru/pages/registerseller/uploads/Portfolio/672b7cf74cd73.png"} width={350} height={350} alt='Award' />
          </div>
          <div onClick={() => OpenModals(4)} className='flex justify-center content-center w-[10cm] h-[10cm] cusor-pointer bg-[#68cbff] box-border rounded-[16px] shadow-xl cursor-pointer'>
            <Image className='max-w-[100%] max-h-[100%] object-contain rounded-[16px]' src={"http://app.sa.ac.th/gubguru/pages/registerseller/uploads/Portfolio/672b7cf3b5827.png"} width={350} height={350} alt='Award' />
          </div>
        </section>

        <h2 className='text-[24px] font-bold' id="Contact">Contact</h2>
        <section className='relative'>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-facebook"
            viewBox="0 0 16 16">
            <path
              d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />

          </svg>
          <Link href={"https://www.facebook.com/pheemmpong.rodvaree/"} target='_blank' className='underline'>Pheemmapong Rodvaree</Link>

          <br />
          <br />
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-instagram"
            viewBox="0 0 16 16">
            <path
              d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
          </svg>
          <Link href={"https://www.instagram.com/pardparw/"} target='_blank' className='underline'>pardparw</Link>

          <br />
          <br />
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope"
            viewBox="0 0 16 16">
            <path
              d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
          </svg>

          <p >pheemmpong7163@gmail.com</p>
          <br />


        </section>

        <div className='fixed left-0 top-0 w-full h-full bg-[#00000066] hidden' id='modals' >
          <div className='bg-[#fff] my-[10%] mx-auto p-[20px] rounded-[10px] w-[60%] h-[60%] box-border	overflow-auto	' >
            <span onClick={() => { const element = document.getElementById("modals"); if (element) element.style.display = "none" }} className='text-[#aaa] float-right text-[28px] font-bold hover:text-[#000] cursor-pointer'>&times;</span>
            <h1 className='text-center text-[24px] font-bold'>{Projectinfo[0]}</h1>
            <br />
            <p className=''>{Projectinfo[1]}</p>
            <br />
            <Link className='text-[#71C55D] font-bold underline' href={Projectinfo[2]} target='_blank'>More Details</Link>

          </div>
        </div>
      </div>
    </div>
  );
}
