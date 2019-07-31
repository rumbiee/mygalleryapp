import React from "react";
import Gallery from "react-photo-gallery";
import Slideshow from "../components/slider"

export default function Home() {
    return (
       
        <div>
            <h2>Welcome to my Gallery app.</h2>
            <Slideshow/>
            <h3>Cum sociis natoque penatibus et magnis dis</h3>
            <p>
                Pellentesque habitant morbi tristique senectus et netus et
                malesuada fames ac turpis egestas. Vestibulum tortor quam,
                feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu
                libero sit amet quam egestas semper. Aenean ultricies mi vitae
                est. Mauris placerat eleifend leo. Quisque sit amet est et
                sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum
                sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum,
                elit eget tincidunt condimentum, eros ipsum rutrum orci,
                sagittis tempus lacus enim ac dui. Donec non enim in turpis
                pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus
                faucibus, tortor neque egestas augue, eu vulputate magna eros eu
                erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis,
                accumsan porttitor, facilisis luctus, metus
            </p>

            <ul>
                <li>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Aenean commodo ligula eget dolor. Aenean massa.
                </li>
                <li>
                    Cum sociis natoque penatibus et magnis dis parturient
                    montes, nascetur ridiculus mus. Donec quam felis, ultricies
                    nec, pellentesque eu, pretium quis, sem.
                </li>
                <li>
                    Nulla consequat massa quis enim. Donec pede justo, fringilla
                    vel, aliquet nec, vulputate eget, arcu.
                </li>
                <li>
                    In enim justo, rhoncus ut, imperdiet a, venenatis vitae,
                    justo. Nullam dictum felis eu pede mollis pretium. Integer
                    tincidunt.
                </li>
            </ul>
            <blockquote>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa <strong>strong</strong>.
                Cum sociis natoque penatibus et magnis dis parturient montes,
                nascetur ridiculus mus. Donec quam felis, ultricies nec,
                pellentesque eu, pretium quis, sem. Nulla consequat massa quis
                enim. Donec pede justo, fringilla vel, aliquet nec, vulputate
                eget, arcu. In <em>em</em>
                enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
                dictum felis eu pede mollis pretium.
            </blockquote>
        </div>
    );
}
