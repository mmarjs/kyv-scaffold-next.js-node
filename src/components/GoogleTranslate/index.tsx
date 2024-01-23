import Head from 'next/head'
import Image from 'next/image'
import React, { useContext, useEffect } from 'react'


interface LayoutProps { }

declare global {
    interface Window {
      google: any,
      googleTranslateElementInit: any // 👈️ turn off type checking
    }
  }

const GoogleTranslation: React.FC<LayoutProps> = () => {
    useEffect(() => {
        if(getCookie('googtrans')){
            deleteCookie('googtrans', '/', '');
        }
        var addScript = document.createElement('script');
        addScript.setAttribute('src', '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit');
        document.body.appendChild(addScript);
        window.googleTranslateElementInit = GoogleTranslateElementInit;
    }, [])

    const getCookie = (name) => {
        return document.cookie.split(';').some(c => {
            return c.trim().startsWith(name + '=');
        });
    }

    const deleteCookie = (name, path, domain) => {
        if (getCookie(name)) {
            document.cookie = name + "=" +
            ((path) ? ";path=" + path : "") +
            ((domain) ? ";domain=" + domain : "") +
            ";expires=Thu, 01 Jan 1970 00:00:01 GMT";
        }
    }

    const GoogleTranslateElementInit = () => {
        new window.google.translate.TranslateElement({
            // pageLanguage: 'en',
            // includedLanguages: "en,ms,ta,zh-CN", // include this for selected languages
            layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE
        },
            'google_translate_element');

    }

    return (
        <div>
            <div id="google_translate_element">
                <div className="skiptranslate goog-te-gadget"></div>
                <span className="google-translation">Select Language</span>
            </div>
        </div>
    )
}

export default GoogleTranslation