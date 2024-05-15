import React, { useState } from "react";
import { Table } from "flowbite-react";
import { FaRegEdit, FaEye } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";
import ReactPaginate from "react-paginate";

export default function ProductTable({
  updateHandler,
  deleteHandler,
  productdata,
  openModal,
  setPagination,
  pagination,
  searchQuery,
  viewHandler,
}) {
  const sizeData = ["1.5", "2", "3", "4"];
  const [itemsPerPage, setItemsPerPage] = useState(10); // State to manage items per page

  // Event handler for changing items per page
  const handleItemsPerPageChange = (event) => {
    setItemsPerPage(parseInt(event.target.value));
    setPagination({ ...pagination, limit: parseInt(event.target.value) }); // Update pagination limit
  };

  const handlePageClick = (event) => {
    setPagination({ ...pagination, page: event?.selected + 1 });
  };

  return (
    <div>
      <div className="py-8">
        <Table responsive>
          <thead>
            <tr className="text-xl text-[#832729] bg-[#d6b8b9e2]">
              <th className="px-4 py-2">Sr.No</th>
              <th className="px-4 py-2">Image</th>
              <th className="px-4 py-2">Title</th>
              <th className="px-4 py-2">Brand</th>
              <th className="px-4 py-2">Gender</th>
              <th className="px-4 py-2">Price</th>
              <th className="px-4 py-2">Category</th>
              <th className="px-4 py-2">Size</th>
              <th className="px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody className="text-lg">
            {productdata?.map((e, i) => (
              <tr key={e._id} className="border-b-2">
                <td className="px-4 py-2">{i + 1}</td>
                <td className="px-4 py-2">
                  <img src={e?.thumbnail} alt="Product" className="w-16 h-16 object-cover rounded" />
                </td>
                <td className="px-4 py-2 capitalize">{e?.title}</td>
                <td className="px-4 py-2 capitalize">{e?.brand}</td>
                <td className="px-4 py-2 capitalize">{e?.gender}</td>
                <td className="px-4 py-2">{e?.price}</td>
                <td className="px-4 py-2">
                  <div className="px-4 py-2 capitalize">
                    {e?.category?.map((category, index) => (
                      <div key={index}>{category}</div>
                    ))}
                  </div>
                </td>
                <td className="px-4 py-2">
                  <div className="flex gap-2">
                    {sizeData.map((size, index) => (
                      <span
                        key={index}
                        className={`rounded-full h-10 w-10 flex justify-center items-center font-semibold text-gray-400 ${e?.size?.includes(size) ? 'bg-gray-200 text-black' : 'bg-gray-100'}`}
                      >
                        {size}
                      </span>
                    ))}
                  </div>
                </td>
                <td className="px-4 py-2">
                  <div className="flex gap-3">
                    <FaEye
                      className="text-2xl cursor-pointer text-green-500"
                      onClick={() => viewHandler(e._id)}
                    />
                    <FaRegEdit
                      className="text-blue-700 text-2xl cursor-pointer"
                      onClick={() => updateHandler(e._id)}
                    />
                    <RiDeleteBin5Line
                      className="text-red-600 text-2xl cursor-pointer"
                      onClick={() => deleteHandler(e._id)}
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex gap-3 items-center">
          <span>Show:</span>
          <select
            className="p-2 border rounded-md"
            value={itemsPerPage}
            onChange={handleItemsPerPageChange}
          >
            <option value={10}>10</option>
            <option value={25}>25</option>
            <option value={50}>50</option>
            <option value={100}>100</option>
          </select>
        </div>
        <ReactPaginate
          className="flex items-center gap-2"
          pageLinkClassName="border p-3"
          nextLinkClassName="border bg-[#832729] text-white p-3 text-xl"
          previousLinkClassName="border bg-[#832729] text-white text-xl p-3"
          activeLinkClassName="bg-red-500 text-white"
          disabledLinkClassName="bg-[#832729]"
          breakLabel="..."
          nextLabel=">"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={Math.ceil(pagination.totalProduct / pagination?.limit)}
          previousLabel="<"
          renderOnZeroPageCount={null}
        />
      </div>
    </div>
  );
}
