import React from 'react'
import "../styles/PreNavbar.css"


const cartIcon = <svg className="temp" xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 0 24 24" width="20px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M15.55 13c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.37-.66-.11-1.48-.87-1.48H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/></svg>

const PreNavbar = () => {
    return (
        <div className="PreNavbar">
            <div>
                <a href="https://www.mi.com/in/store">Store</a> <span>|</span>
                <a href="https://www.mi.com/in/phone">Phone</a> <span>|</span>
                <a href="https://www.mi.com/in/smart-home">TV & Smart Home</a> <span>|</span>
                <a href="https://www.mi.com/in/smart-office">Laptop & Tablet</a> <span>|</span>
                <a href="https://www.mi.com/in/life-style">LifeStyle</a>
            </div>
            <div>
                <a href="https://www.mi.com/in/discover">Discover</a> <span>|</span>
                <a href="https://www.mi.com/in/support">Support</a> <span>|</span>
                <a href="https://store.mi.com/in/cart"> {cartIcon}</a><span>|</span>
                <a href="https://account.xiaomi.com/fe/service/login/password?_locale=en_IN&checkSafePhone=false&sid=i18n_in_pc_pro&qs=%253Fcallback%253Dhttps%25253A%25252F%25252Fstore.mi.com%25252Fin%25252Flogin%25252Fcallback%25253Ffollowup%25253Dhttps%2525253A%2525252F%2525252Fwww.mi.com%2525252Fin%252526sign%25253DNGQyZTY1M2VjNGNjYTc5NzFlZDc1YmY2ZmM2NDFiYWMwNTU5YzUyNQ%25252C%25252C%2526sid%253Di18n_in_pc_pro%2526_locale%253Den_IN%2526checkSafePhone%253Dfalse&callback=https%3A%2F%2Fstore.mi.com%2Fin%2Flogin%2Fcallback%3Ffollowup%3Dhttps%253A%252F%252Fwww.mi.com%252Fin%26sign%3DNGQyZTY1M2VjNGNjYTc5NzFlZDc1YmY2ZmM2NDFiYWMwNTU5YzUyNQ%2C%2C&_sign=uehdVfAqNGdpuB7pv6IBhI1JGz0%3D&serviceParam=%7B%22checkSafePhone%22%3Afalse%2C%22checkSafeAddress%22%3Afalse%2C%22lsrp_score%22%3A0.0%7D&showActiveX=false&theme=&needTheme=false&bizDeviceType=">SIGN IN</a> <span>|</span>
                <a href="https://in.account.xiaomi.com/fe/service/register?_uRegion=IN&_locale=en_IN&source=&region=IN&sid=i18n_in_pc_pro&qs=_locale%3Den_IN%26source%3D%26region%3DIN%26sid%3Di18n_in_pc_pro%26qs%3Dcallback%253Dhttps%25253A%25252F%25252Fstore.mi.com%25252Fin%25252Flogin%25252Fcallback%25253Ffollowup%25253Dhttps%2525253A%2525252F%2525252Fstore.mi.com%2525252Fin%2525252Fcart%252526sign%25253DZTZjMWY4ZDYzMGZiYTk4MGM0YTgyMTdiMTQzOGU4OWYwNDJkOWE2NQ%25252C%25252C%2526sid%253Di18n_in_pc_pro%2526_locale%253Den_IN%26callback%3Dhttps%253A%252F%252Fstore.mi.com%252Fin%252Flogin%252Fcallback%253Ffollowup%253Dhttps%25253A%25252F%25252Fstore.mi.com%25252Fin%25252Fcart%2526sign%253DZTZjMWY4ZDYzMGZiYTk4MGM0YTgyMTdiMTQzOGU4OWYwNDJkOWE2NQ%252C%252C%26_uRegion%3DIN&callback=https%3A%2F%2Fstore.mi.com%2Fin%2Flogin%2Fcallback%3Ffollowup%3Dhttps%253A%252F%252Fstore.mi.com%252Fin%252Fcart%26sign%3DZTZjMWY4ZDYzMGZiYTk4MGM0YTgyMTdiMTQzOGU4OWYwNDJkOWE2NQ%2C%2C">SIGN UP</a>

            </div>
        </div>
    )
}

export default PreNavbar
