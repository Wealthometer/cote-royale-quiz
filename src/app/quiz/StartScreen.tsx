"use client";

import { Content } from "@prismicio/client";
import { PrismicRichText } from "@prismicio/react";

import { FadeIn } from "@/components/FadeIn";
import { RevealText } from "@/components/RevealText";

type StartScreenProps = {
  quizData: Content.QuizDocument;
  onStart: () => void;
};

export const StartScreen = ({ onStart, quizData }: StartScreenProps) => {
  return (
    <div className="mx-auto max-w-4xl py-40 text-center">
      <FadeIn vars={{ delay: 0, duration: 1.2 }} className="translate-y-8">
        <p className="mb-4 tracking-widest uppercase">
          {quizData.data.eyebrow}
        </p>
      </FadeIn>

      <RevealText
        align="center"
        id="quiz-title"
        field={quizData.data.title}
        className="font-display mb-8 text-5xl text-balance sm:text-6xl md:text-7xl"
        duration={2}
      />

      <FadeIn
        vars={{ delay: 1.3, duration: 2 }}
        className="mx-auto mb-12 max-w-2xl text-lg text-balance text-gray-300"
      >
        <PrismicRichText field={quizData.data.body} />
      </FadeIn>

      <FadeIn vars={{ delay: 2, duration: 2 }} className="translate-y-8">
        <button
          onClick={onStart}
          className="inline-block cursor-pointer bg-white px-12 py-4 font-extrabold tracking-wider text-black uppercase transition-colors hover:bg-gray-100"
        >
          {quizData.data.start_button_text || "Start the quiz"}
        </button>
      </FadeIn>
    </div>
  );
};
