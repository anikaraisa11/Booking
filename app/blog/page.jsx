"use client";
import BlogSearch from "@/components/BlogSearch/BlogSearch";
import Link from "next/link";
import Header from "@/components/Header/Header";
import {  useState } from "react";
import "./blog.css";
import { useBlogTagQuery } from "@/lib/redux/features/blog/blogTags";
import Loading from "@/components/Loading/Loading";
import Error from "@/components/Error/Error";
import { useBlogsDataQuery } from "@/lib/redux/features/blog/blogApi";
import Image from "next/image";
import { PlusOutlined } from "@ant-design/icons";
import { FacebookShareButton, LinkedinShareButton, TwitterShareButton, WhatsappShareButton } from "react-share";

function BlogPage() {
  const [searchValue,setSearchValue]=useState('')
  const { isLoading, isError, data } = useBlogTagQuery();
  const { isLoading:blogLoading, isError:blogError, data:blogData } = useBlogsDataQuery(searchValue);
  
  let content;
  let blogContent  

  // tag start --------------------------------------
  if (isLoading) {
    content = <Loading />;
  }
  if (!isLoading && isError) {
    content = <Error ErrorMessage="Something went wrong" />;
  }
  if (!isLoading && !isError && data?.data?.length > 0) {
    content = <Error ErrorMessage="Data not found" />;
  }

  if(!isLoading && !isError && data?.data?.length > 0){
    content = data?.data.map((item,index)=> <div className="m-2 cursor-pointer"><small className=' border p-2'>{item?.name}</small></div> )
  }

  // blog start --------------------------------------
  if (blogLoading) {
    blogContent = <Loading />;
  }
  if (!blogLoading && blogError) {
    blogContent = <Error ErrorMessage="Something went wrong" />;
  }
  if (!blogLoading && !blogError && blogData?.message?.length > 0) {
    blogContent = <Error ErrorMessage="Data not found" />;
  }

  if(!isLoading && !isError && blogData?.message?.length > 0){
    blogContent =  blogData
  }



  return (
    <>
      <Header />
      <div className="w-full mx-5 ">
        <BlogSearch setSearchValue={setSearchValue} /> 
      <div className="grid grid-cols-12 mt-10 mb-10 gap-4">
            <div className="lg:col-span-9 col-span-12">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {
                blogData?.message?.map((item,index)=> <div className="mainDiv border p-2">
                  <Link href={`/blog/${item?.id}`}>
                  <Image className="image__img" width={200} height={200} src={item?.image[0]?.url} />
                  <div className="flex text-[#008080] justify-between">
                    <small>Publish Date:</small> 
                    <small>{new Date(item?.created_at).toLocaleDateString()}</small>
                    </div>
                    {/* content  */}
                    <h2 className="text-[#008080] font-bold">{item?.name}</h2>
                    <p>{item?.desc.replace(/<[^>]+>/g, '').slice(0,100)}</p>
                    <div className="overlay overlay--blur">
                    <PlusOutlined className="text-[50px] " />
                    <p className="text-center text-2xl"> Details</p>
                    <div className="flex items-center justify-center mt-5 gap-3">
          
                        <FacebookShareButton url="https://demo.webcodecare.com/">
                            <i className="text-[22px] text-white fa-brands fa-facebook"></i>
                        </FacebookShareButton>
                        
                        <WhatsappShareButton url="https://demo.webcodecare.com/">
                            <i className="text-[22px] text-white fa-brands fa-whatsapp"></i>
                        </WhatsappShareButton>
                        
                        <LinkedinShareButton url="https://demo.webcodecare.com/">
                            <i className="text-[22px] text-white fa-brands fa-linkedin"></i>
                        </LinkedinShareButton>
                        
                        <TwitterShareButton url="https://demo.webcodecare.com/">
                            <i className="text-[22px] text-white  fa-brands fa-twitter"></i>
                        </TwitterShareButton>
                        </div>
                    </div>
                    {/* content  */}
                  </Link>
                </div>)
              }
              </div>
            </div>
            <div className="lg:col-span-3 rounded-lg col-span-12">
                <p className="flex font-medium text-[#008080] flex-wrap rounded-lg m-2 gap-2">
                  {content}
                </p>
            </div>
        </div>
      </div>
    </>
  );
}

export default BlogPage;
