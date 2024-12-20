
export const MainContent = () => {
    return (
        <div className="w-full">
            <div className="bg-black h-36">
            </div>

            <div className="grid grid-cols-11 gap-7 p-7">
                <div className="col-span-3 -translate-y-16">
                    <ProfileCard 
                        imgPath={"/avatar.jpeg"} 
                        name={"Sara Conner"} 
                        email={"saraconner@gmail.com"} 
                        phoneNumber={"9898989898"} 
                        address={"Delhi, India"} 
                    />
                </div>

                <div className="bg-white col-span-5">
                    <MainSectionCard 
                        date={"Friday, 20 December"}
                        name={"Sara"}
                        year={"2024"}
                    />
                </div>

                <div className="col-span-3 h-60 mt-28 bg-white shadow-lg rounded-2xl border border-gray-200">
                    <MeetingCard 
                        title={"Schedule a Webinar"}
                        icon={<svg width="80%" height="80%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21 11.5V8.8C21 7.11984 21 6.27976 20.673 5.63803C20.3854 5.07354 19.9265 4.6146 19.362 4.32698C18.7202 4 17.8802 4 16.2 4H7.8C6.11984 4 5.27976 4 4.63803 4.32698C4.07354 4.6146 3.6146 5.07354 3.32698 5.63803C3 6.27976 3 7.11984 3 8.8V17.2C3 18.8802 3 19.7202 3.32698 20.362C3.6146 20.9265 4.07354 21.3854 4.63803 21.673C5.27976 22 6.11984 22 7.8 22H12.5M21 10H3M16 2V6M8 2V6M18 21V15M15 18H21" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        }
                    />
                    <MeetingCard 
                        title={"Join a Webinar"}
                        icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-8">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                          </svg>                                                    
                        }
                    />
                    <MeetingCard 
                        title={"Open Recordings"}
                        icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-8">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 0 1-1.125-1.125M3.375 19.5h1.5C5.496 19.5 6 18.996 6 18.375m-3.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-1.5A1.125 1.125 0 0 1 18 18.375M20.625 4.5H3.375m17.25 0c.621 0 1.125.504 1.125 1.125M20.625 4.5h-1.5C18.504 4.5 18 5.004 18 5.625m3.75 0v1.5c0 .621-.504 1.125-1.125 1.125M3.375 4.5c-.621 0-1.125.504-1.125 1.125M3.375 4.5h1.5C5.496 4.5 6 5.004 6 5.625m-3.75 0v1.5c0 .621.504 1.125 1.125 1.125m0 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m1.5-3.75C5.496 8.25 6 7.746 6 7.125v-1.5M4.875 8.25C5.496 8.25 6 8.754 6 9.375v1.5m0-5.25v5.25m0-5.25C6 5.004 6.504 4.5 7.125 4.5h9.75c.621 0 1.125.504 1.125 1.125m1.125 2.625h1.5m-1.5 0A1.125 1.125 0 0 1 18 7.125v-1.5m1.125 2.625c-.621 0-1.125.504-1.125 1.125v1.5m2.625-2.625c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125M18 5.625v5.25M7.125 12h9.75m-9.75 0A1.125 1.125 0 0 1 6 10.875M7.125 12C6.504 12 6 12.504 6 13.125m0-2.25C6 11.496 5.496 12 4.875 12M18 10.875c0 .621-.504 1.125-1.125 1.125M18 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m-12 5.25v-5.25m0 5.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125m-12 0v-1.5c0-.621-.504-1.125-1.125-1.125M18 18.375v-5.25m0 5.25v-1.5c0-.621.504-1.125 1.125-1.125M18 13.125v1.5c0 .621.504 1.125 1.125 1.125M18 13.125c0-.621.504-1.125 1.125-1.125M6 13.125v1.5c0 .621-.504 1.125-1.125 1.125M6 13.125C6 12.504 5.496 12 4.875 12m-1.5 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M19.125 12h1.5m0 0c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h1.5m14.25 0h1.5" />
                          </svg>                          
                        }
                    />
                </div>
            </div>
        </div>
    )
}

function MeetingCard({ title, icon }) {
    return <div className="flex justify-center">
        <div className="w-11/12 mt-4">
            <div className=" hover:bg-blue-400 flex justify-between items-center p-2 rounded-md border border-gray-300 cursor-pointer">
                <div className="w-10 h-10 rounded-md flex items-center">
                    {icon}
                </div>

                <p className="text-lg font-semibold">{title}</p>
            </div>
        </div>
    </div>
}

function MainSectionCard({ date, name, year }) {
    return <div className="bg-white">
        <div>
            <p className="">{date}</p>
            <h1 className="text-3xl font-bold text-blue-700 mt-3">Good morning, {name}! 👋</h1>
        </div>

        <div className="shadow-lg rounded-2xl h-96 mt-10 border border-gray-200 flex justify-center">
            <div className="w-11/12">
                <div className="flex justify-between bg-slate-200 p-2 mt-5 rounded-md cursor-pointer">
                    <div className="flex items-center">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
                            </svg>
                        </div>

                        <div className="flex text-lg items-center ml-4">
                            <p>{date} {year}</p>

                            <div className="text-gray-500 ml-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                </svg>
                            </div>

                        </div>
                    </div>

                    <div className="flex items-center gap-3 text-gray-500">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                        </svg>

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                        </svg>
                    </div>
                </div>

                <div>
                    <Events 
                        time={"12:00 AM"}
                        schedule={"Live"}
                        title={"UX Webinar"}
                        haveBorder={true}
                    />
                    <Events 
                        time={"12:00 PM"}
                        schedule={"Upcoming"}
                        title={"My First Webinar"}
                        haveBorder={true}
                    />
                    <Events 
                        time={"12:00 PM"}
                        schedule={"Upcoming"}
                        title={"Important Webinar"}
                        haveBorder={true}
                    />
                    <Events 
                        time={"12:00 PM"}
                        schedule={"Upcoming"}
                        title={"Webinar 1"}
                        haveBorder={false}
                    />
                </div>    
            </div>
        </div>
    </div>
}

function Events({ time, title, schedule, haveBorder }) {
    return <div className={`flex ${haveBorder == true ?  "border-b-2 border-gray-200": null} px-1 py-2 mt-2 cursor-pointer`}>
        <div className="flex flex-col justify-start border-r-2 border-green-600">
            <div className="mr-4 text-gray-700">
                {time}
            </div>
            <div className="text-sm mt-1.5 text-gray-400">
                {time}
            </div>
        </div>

        <div className="flex flex-col ml-4 ">
            <div className="flex items-center"> 
                <div className="text-sm text-gray-400 mr-2">
                    {schedule}
                </div>

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4" >
                    <path stroke-linecap="round" stroke-linejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
                </svg>

            </div>
            <div className="text-lg font-semibold text-gray-700 mt-1">
                {title}
            </div>
        </div>
    </div>
}

function ProfileCard({ imgPath, name, email, phoneNumber, address }) {
    return <div className="shadow-lg rounded-2xl flex flex-col justify-center items-center border border-gray-200 bg-white h-96 cursor-pointer">
        <div>
            <img src={imgPath} className="h-32 w-32 rounded-lg" />
        </div>
        <div className="flex flex-col justify-center items-center mt-6 ">
            <h1 className="font-bold text-xl">{name}</h1>
            <p className="text-gray-400 mt-2">{email}</p>
            <p className="text-gray-400 mt-1">{phoneNumber}</p>
            <p className="text-gray-400 mt-3">{address}</p>
        </div>
    </div>
}