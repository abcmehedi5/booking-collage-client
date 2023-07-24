import React from "react";
import { Gallery } from "react-grid-gallery";

const Image_Gallery = () => {
  const images = [
    {
      src: "https://media.istockphoto.com/id/484741611/photo/group-of-diverse-international-students-celebrating-graduation.jpg?s=612x612&w=0&k=20&c=rq6gWCf2scTq_fbvJwSYrL0pC8AfYuV7WDuvRmUmqz0=",
      width: 320,
      height: 212,
      tags: [
        { value: "Ocean", title: "Ocean" },
        { value: "People", title: "People" },
      ],
      caption: "After Rain (Jeshu John - designerspics.com)",
    },
    {
      src: "https://www.stthomas.edu/_media-library/_images/commencement/stthomas-commencement-dfc.jpg",
      width: 320,
      height: 212,
      tags: [
        { value: "Ocean", title: "Ocean" },
        { value: "People", title: "People" },
      ],
      caption: "After Rain (Jeshu John - designerspics.com)",
    },
    {
      src: "https://www.laketech.org/wp-content/uploads/2021/05/Graduation-061021.jpg",
      width: 420,
      height: 212,
      caption: "After Rain (Jeshu John - designerspics.com)",
      tags: [
        { value: "Ocean", title: "Ocean" },
        { value: "People", title: "People" },
      ],
    },
    {
      src: "https://cdn-7.nikon-cdn.com/Images/Learn-Explore/Photography-Techniques/2016/Graduation-photo-tips/Media/Graduation-photos-2-girlfriends.jpg",
      width: 400,
      height: 212,
      tags: [
        { value: "Ocean", title: "Ocean" },
        { value: "People", title: "People" },
      ],
    },
    {
      src: "https://previews.123rf.com/images/dotshock/dotshock1508/dotshock150801371/44058189-young-graduates-students-group-standing-in-front-of-university-building-on-graduation-day.jpg",
      width: 400,
      height: 212,
      tags: [
        { value: "Ocean", title: "Ocean" },
        { value: "People", title: "People" },
      ],
    },
    
 

  
  ];
  return (
    <div className="pb-10 flex text-center justify-center p-4">

      <div>
        <h2 className="text-3xl  font-semibold text-gray-800 mb-6 mt-2">
          Graduate's group pictures
        </h2>
        <Gallery images={images} />
      </div>

    </div>
  );
};

export default Image_Gallery;
