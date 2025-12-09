import { GrCloudComputer } from 'react-icons/gr'
import { IoIosSchool } from 'react-icons/io'
import { RiWifiOffLine } from 'react-icons/ri'

function Education() {
    return (
        <>
            <div className='text-center lg:text-left'>
                <div>
                    <h1 className='text-4xl font-semibold pb-10'>
                        My Education
                    </h1>
                    <p className='leading-8 font-poppins text-white/70 mb-5'>It's me Peyal Hasan. I am studying Computer Science & Technology at Mymensingh Polytechnic Institute.
                    I am from Gazipur, Bangladesh</p>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-15'>
                    <div className='bg-[#232229] py-10 px-10 leading-9 rounded-2xl  shadow-xl shadow-green-500/40 hover:scale-105 duration-300 ease-in'>
                        <h3 className='text-white pb-4 text-xl'>Bd Calling It Ltd</h3>
                        <p className='text-white/70'>Web Development Course (MERN Stack)</p>
                        <p className='text-white/70'>September 2025 - December 2025</p>
                        <p className='flex gap-2 items-center text-center justify-center lg:justify-start  text-blue-400'><RiWifiOffLine className='text-yellow-400' /> Online course platform</p>
                    </div>

                    <div className='bg-[#232229] py-10 px-10 leading-9 rounded-2xl shadow-xl shadow-green-500/40 hover:scale-105 duration-300 ease-in'>
                        <h3 className='text-white pb-4 text-xl'>Mymensingh Polytechnic Institute</h3>
                        <p className='text-white/70'>Certificate in Diploma in Enginnering, Computer Science</p>
                        <p className='text-white/70'>September,2025 - Present(8th semester)</p>
                        <p className='flex gap-2 items-center text-center justify-center lg:justify-start text-blue-400'><GrCloudComputer className='text-yellow-400' /> Tech Institute</p>
                    </div>

                    <div className='bg-[#232229] py-10 px-10 leading-9 rounded-2xl shadow-xl shadow-green-500/40 hover:scale-105 duration-300 ease-in'>
                        <h3 className='text-white pb-4 text-xl'>Jogirsit High School</h3>
                        <p className='text-white/70'>Secondary School Certificate, Science</p>
                        <p className='text-white/70'>Jan,2019 - Nov,2021</p>
                        <p className='flex gap-2 items-center text-center justify-center lg:justify-start text-blue-400'><IoIosSchool className='text-yellow-400' /> School</p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Education;
