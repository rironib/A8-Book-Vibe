import {useLoaderData} from "react-router-dom";
import {useEffect, useState} from "react";
import {getReadBookList} from "../../Utility/localStorage.js";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import {Helmet} from "react-helmet-async";

const Statistics = () => {
    const books = useLoaderData();

    const [data, setData] = useState([]);

    useEffect(() => {
        const storedReadBookList = getReadBookList();
        if(books.length > 0){
            const bookReaded = books.filter(book => storedReadBookList.includes(book.bookId));
            setData(bookReaded);
        }
    }, [books]);

    const colors = [
        "#000000", // Black
        "#FF5733", // Reddish Orange
        "#FFBD33", // Gold
        "#FFDD33", // Yellow
        "#33FF57", // Greenish Yellow
        "#33FFBD", // Turquoise
        "#33DDFF", // Sky Blue
        "#3366FF", // Royal Blue
        "#5733FF", // Violet
        "#BD33FF", // Purple
        "#FF33BD", // Magenta
        "#FF3366"  // Pink
    ];

const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

    return (
        <>
            <Helmet>
                <title>Pages to Read | Book Vibe</title>
            </Helmet>
            <div className='font-inter' style={{width: '100%', height: 300}}>
                <ResponsiveContainer>
                    <BarChart
                        width={500}
                        height={300}
                        data={data}
                        margin={{
                            top: 20,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3"/>
                        <XAxis dataKey="bookName"/>
                        <YAxis/>
                        <Tooltip />
                        <Bar dataKey="totalPages" fill="#8884d8" shape={<TriangleBar/>} label={{position: 'top'}}>
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={colors[index % 20]}/>
                            ))}
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </>
    );
};

export default Statistics;