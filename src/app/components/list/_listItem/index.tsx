import Image from "next/image"

const ListItem = () => {
    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-400 dark:text-gray-400">
                <thead className="text-xs text-white uppercase bg-sub-menu dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="p-4">
                            <div className="flex items-center">
                                <input id="checkbox-all-search" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                <label htmlFor="checkbox-all-search" className="sr-only">checkbox</label>
                            </div>
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Position
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Status
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="bg-menu border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-sub-menu dark:hover:bg-gray-600">
                        <td className="w-4 p-4">
                            <div className="flex items-center">
                                <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                <label htmlFor="checkbox-table-search-1" className="sr-only">checkbox</label>
                            </div>

                        </td>
                        <th scope="row" className="flex items-center px-6 py-4 text-white whitespace-nowrap dark:text-white">
                            <Image className="w-10 h-10 rounded-full" src="/atendente.jpg" alt="Jese image" width={200} height={200} />
                            <div className="ps-3">
                                <div className="text-base font-semibold">Neil Sims</div>
                                <div className="font-normal text-gray-400">neil.sims@flowbite.com</div>
                            </div>
                        </th>
                        <td className="px-6 py-4">
                            React Developer
                        </td>
                        <td className="px-6 py-4">
                            <div className="flex items-center">
                                <div className="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div> Online
                            </div>
                        </td>
                        <td className="px-6 py-4">
                            <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit user</a>
                        </td>
                    </tr>
                    <tr className="bg-menu border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-sub-menu dark:hover:bg-gray-600">
                        <td className="w-4 p-4">
                            <div className="flex items-center">
                                <input id="checkbox-table-search-2" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                <label htmlFor="checkbox-table-search-2" className="sr-only">checkbox</label>
                            </div>
                        </td>
                        <th scope="row" className="flex items-center px-6 py-4 font-medium text-white whitespace-nowrap dark:text-white">
                            <Image className="w-10 h-10 rounded-full" src="/atendente.jpg" alt="Jese image" width={200} height={200} />
                            <div className="ps-3">
                                <div className="text-base font-semibold">Bonnie Green</div>
                                <div className="font-normal text-gray-400">bonnie@flowbite.com</div>
                            </div>
                        </th>
                        <td className="px-6 py-4">
                            Designer
                        </td>
                        <td className="px-6 py-4">
                            <div className="flex items-center">
                                <div className="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div> Online
                            </div>
                        </td>
                        <td className="px-6 py-4">
                            <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit user</a>
                        </td>
                    </tr>
                    <tr className="bg-menu border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-sub-menu dark:hover:bg-gray-600">
                        <td className="w-4 p-4">
                            <div className="flex items-center">
                                <input id="checkbox-table-search-2" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />

                            </div>
                        </td>
                        <th scope="row" className="flex items-center px-6 py-4 font-medium text-white whitespace-nowrap dark:text-white">
                            <Image className="w-10 h-10 rounded-full" src="/atendente.jpg" alt="Jese image" width={200} height={200} />
                            <div className="ps-3">
                                <div className="text-base font-semibold">Jese Leos</div>
                                <div className="font-normal text-gray-400">jese@flowbite.com</div>
                            </div>
                        </th>
                        <td className="px-6 py-4">
                            Vue JS Developer
                        </td>
                        <td className="px-6 py-4">
                            <div className="flex items-center">
                                <div className="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div> Online
                            </div>
                        </td>
                        <td className="px-6 py-4">
                            <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit user</a>
                        </td>
                    </tr>
                    <tr className="bg-menu border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-sub-menu dark:hover:bg-gray-600">
                        <td className="w-4 p-4">
                            <div className="flex items-center">
                                <input id="checkbox-table-search-2" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                <label htmlFor="checkbox-table-search-2" className="sr-only">checkbox</label>
                            </div>
                        </td>
                        <th scope="row" className="flex items-center px-6 py-4 font-medium text-white whitespace-nowrap dark:text-white">
                            <Image className="w-10 h-10 rounded-full" src="/atendente.jpg" alt="Jese image" width={200} height={200} />
                            <div className="ps-3">
                                <div className="text-base font-semibold">Thomas Lean</div>
                                <div className="font-normal text-gray-400">thomes@flowbite.com</div>
                            </div>
                        </th>
                        <td className="px-6 py-4">
                            UI/UX Engineer
                        </td>
                        <td className="px-6 py-4">
                            <div className="flex items-center">
                                <div className="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div> Online
                            </div>
                        </td>
                        <td className="px-6 py-4">
                            <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit user</a>
                        </td>
                    </tr>
                    <tr className="bg-menu dark:bg-gray-800 hover:bg-sub-menu dark:hover:bg-gray-600">
                        <td className="w-4 p-4">
                            <div className="flex items-center">
                                <input id="checkbox-table-search-3" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                <label htmlFor="checkbox-table-search-3" className="sr-only">checkbox</label>
                            </div>
                        </td>
                        <th scope="row" className="flex items-center px-6 py-4 font-medium text-white whitespace-nowrap dark:text-white">
                            <Image className="w-10 h-10 rounded-full" src="/atendente.jpg" alt="Jese image" width={200} height={200} />
                            <div className="ps-3">
                                <div className="text-base font-semibold">Leslie Livingston</div>
                                <div className="font-normal text-gray-400">leslie@flowbite.com</div>
                            </div>
                        </th>
                        <td className="px-6 py-4">
                            SEO Specialist
                        </td>
                        <td className="px-6 py-4">
                            <div className="flex items-center">
                                <div className="h-2.5 w-2.5 rounded-full bg-red-500 me-2"></div> Offline
                            </div>
                        </td>
                        <td className="px-6 py-4">
                            <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit user</a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default ListItem