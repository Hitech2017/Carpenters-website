import Project from '../components/Project/Project';
import styles from './gallery.module.css';

const projects = [
    {
        title: "The Golden Circle Pradise",
        area: '1255 sq ft.',
        description: 'As the centre of your home, the kitchen radiates warmth and care. Our interior design team works with your vision, your lifestyle, and your budget to create modular kitchens that you will love!',
        loc: "Chennai, Tamilnadu",
        images: [
            "/images/project1/s1.jpeg",
            "/images/project1/s2.jpeg",
            "/images/project1/s3.jpeg",
            "/images/project1/s4.jpeg",
        ]
    }
]

const projects1 = [
    {
      
        images: [
            "/images/project1/s5.jpeg",
            "/images/project1/s6.jpeg",
            "/images/project1/s7.jpeg",
            "/images/project1/s8.jpeg",
        ]
    }
]
const projects2 = [
    {
      
        images: [
            "/images/project1/s9.jpeg",
            "/images/project1/s10.jpeg",
            "/images/project1/s11.jpeg",
            "/images/project1/s12.jpeg",
        ]
    }
]
const projects3 = [
    {
      
        images: [
            "/images/project1/s13.jpeg",
            "/images/project1/s14.jpeg",
            "/images/project1/s15.jpeg",
            "/images/project1/s16.jpeg",
        ]
    }
]
const projects4 = [
    {
      
        images: [
            "/images/project1/s17.jpeg",
            "/images/project1/s18.jpeg",
            "/images/project1/s19.jpeg",
            "/images/project1/s20.jpeg",
        ]
    }
]

const projects5 = [
    {
      
        images: [
            "/images/project1/s21.jpeg",
            "/images/project1/s22.jpeg",
            "/images/project1/s23.jpeg",
            "/images/project1/s24.jpeg",
        ]
    }
]

const projects6 = [
    {
      
        images: [
            "/images/project1/s25.jpeg",
            "/images/project1/s26.jpeg",
            "/images/project1/s27.jpeg",
            "/images/project1/s28.jpeg",
        ]
    }
]

const projects7 = [
    {
      
        images: [
            "/images/project1/s29.jpeg",
            "/images/project1/s30.jpeg",
            "/images/project1/s31.jpeg",
            "/images/project1/s32.jpeg",
        ]
    }
]
const projects8 = [
    {
      
        images: [
            "/images/project1/s33.jpeg",
            "/images/project1/s34.jpeg",
            "/images/project1/s35.jpeg",
            "/images/project1/s36.jpeg",
        ]
    }
]

const projects9 = [
    {
      
        images: [
            "/images/project1/s37.jpeg",
            "/images/project1/s38.jpeg",
            "/images/project1/s39.jpeg",
            "/images/project1/s40.jpeg",
        ]
    }
]
const projects10 = [
    {
      
        images: [
            "/images/project1/s41.jpeg",
            "/images/project1/s42.jpeg",
            "/images/project1/s43.jpeg",
            "/images/project1/s44.jpeg",
        ]
    }
]
function Gallery() {
    return <div className={styles.gallery_container}>
        <div className={styles.gallery_wrapper}>
            <h1 className={styles.title}>Projects & Gallery</h1>
            {
                projects.map((pro, index) => (
                    <Project key={index} {...pro} />
                ))
            }
        </div>


        <div className={styles.gallery_wrapper}>
            
            {
                projects1.map((pro, index) => (
                    <Project key={index} {...pro} />
                ))
            }
        </div>
        <div className={styles.gallery_wrapper}>
            
            {
                projects2.map((pro, index) => (
                    <Project key={index} {...pro} />
                ))
            }
        </div>
        <div className={styles.gallery_wrapper}>
            
            {
                projects3.map((pro, index) => (
                    <Project key={index} {...pro} />
                ))
            }
        </div>
        <div className={styles.gallery_wrapper}>
            
            {
                projects4.map((pro, index) => (
                    <Project key={index} {...pro} />
                ))
            }
        </div>

        <div className={styles.gallery_wrapper}>
            
            {
                projects5.map((pro, index) => (
                    <Project key={index} {...pro} />
                ))
            }
        </div>

        <div className={styles.gallery_wrapper}>
            
            {
                projects6.map((pro, index) => (
                    <Project key={index} {...pro} />
                ))
            }
        </div>


            <div className={styles.gallery_wrapper}>
            
            {
                projects7.map((pro, index) => (
                    <Project key={index} {...pro} />
                ))
            }
        </div>


        <div className={styles.gallery_wrapper}>
            
            {
                projects8.map((pro, index) => (
                    <Project key={index} {...pro} />
                ))
            }
        </div>
        <div className={styles.gallery_wrapper}>
            
            {
                projects9.map((pro, index) => (
                    <Project key={index} {...pro} />
                ))
            }
        </div>

        <div className={styles.gallery_wrapper}>
            
            {
                projects10.map((pro, index) => (
                    <Project key={index} {...pro} />
                ))
            }
        </div>

    </div>
};

export default Gallery;