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
        var addScript = document.createElement('script');
        addScript.setAttribute('src', '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit');
        document.body.appendChild(addScript);
        window.googleTranslateElementInit = GoogleTranslateElementInit;
    }, [])

    const GoogleTranslateElementInit = () => {
        new window.google.translate.TranslateElement({
            pageLanguage: 'en',
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