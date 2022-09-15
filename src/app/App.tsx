import React, {Suspense, useContext, useState} from 'react';
import "./styles/index.scss"
import {Route, Routes} from "react-router-dom";
import {classNames} from "shared/lib/classNames/classNames";
import {useTheme} from "app/providers/ThemeProvider";
import {About} from "pages/about";
import Index from "pages/index";
import {Main} from "pages/main";

const App = () => {
    const {theme, toogle_theme} =useTheme();

    return (
        <div className= {classNames("app",{}, [theme])}>
            <p>
                Это проект реакт!!!
            </p>
            <p>
                <button onClick={toogle_theme}>Сменить тему</button>
            </p>
            <Suspense fallback={<div>Загрузка...</div>}>
                <Routes>
                    <Route path="/" element ={<Index/>} >
                        <Route index element={<div>Страница не выбрана</div>}></Route>
                        <Route path="Main" element={<Main/>}/>
                        <Route path="About" element={<About/>}/>
                    </Route>
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;