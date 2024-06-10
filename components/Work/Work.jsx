import Image from "next/image";
import icon from "../../src/assets/img/a.svg";
import doctor from "../../src/assets/img/doctorWork.png";
import "./Work.css";

function Work() {
  return (
    <div className="mt-8">
      <div className="doctor">{/* background  */}</div>
      <div className="work bg-[#F8F7F7]">
        <div className="customContainer">
          <div className="grid grid-cols-12 gap-4">
            <div className="md:col-span-4 col-span-12">
              <Image
                src={doctor}
                className="mt-12"
                width={500}
                height={500}
                alt="image"
              />
            </div>
            <div className="md:col-span-8 col-span-12">
              <h4 className="text-2xl font-bold text-[#008080]">
                How it Works
              </h4>
              <div className="relative">
                <h2 className="md:text-6xl text-4xl font-medium">
                  4 easy steps to get your solution
                </h2>
                <Image
                  src={icon}
                  className="absolute top-[-30px] right-0"
                  alt="Icon"
                  height={50}
                  width={50}
                />
              </div>
              <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
                {/* single data */}
                <div className="flex items-center gap-10 mt-2">
                  <div className="rounded-lg p-2 extraAnimationWork">
                    <i
                      className="fa-solid fa-magnifying-glass text-[#008080]"
                      style={{ fontSize: "40px" }}
                    ></i>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">Search Doctor</h3>
                    <p className="text-gray-500 ">
                      Lorem ipsum dolor consectetur adipiscing elit, tempor
                      incididunt labore dolore magna aliqua.
                    </p>
                  </div>
                </div>
                {/* single data */}
                {/* single data */}
                <div className="flex items-center gap-10 mt-2">
                  <div className="rounded-lg p-2 extraAnimationWork">
                    <i
                      className="fa-solid fa-user text-[#008080]"
                      style={{ fontSize: "40px" }}
                    ></i>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">Check Doctor Profile</h3>
                    <p className="text-gray-500 ">
                      Lorem ipsum dolor consectetur adipiscing elit, tempor
                      incididunt labore dolore magna aliqua.
                    </p>
                  </div>
                </div>
                {/* single data */}
                {/* single data */}
                <div className="flex items-center gap-10 mt-2">
                  <div className="rounded-lg p-2 extraAnimationWork">
                    <i
                      className="fa-solid fa-calendar text-[#008080]"
                      style={{ fontSize: "40px" }}
                    ></i>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">Schedule Appointment</h3>
                    <p className="text-gray-500 ">
                      Lorem ipsum dolor consectetur adipiscing elit, tempor
                      incididunt labore dolore magna aliqua.
                    </p>
                  </div>
                </div>
                {/* single data */}
                {/* single data */}
                <div className="flex items-center gap-10 mt-2">
                  <div className="rounded-lg p-2 extraAnimationWork">
                    <i
                      className="fa-regular fa-lightbulb text-[#008080]"
                      style={{ fontSize: "40px" }}
                    ></i>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">Get Your Solution</h3>
                    <p className="text-gray-500 ">
                      Lorem ipsum dolor consectetur adipiscing elit, tempor
                      incididunt labore dolore magna aliqua.
                    </p>
                  </div>
                </div>
                {/* single data */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
