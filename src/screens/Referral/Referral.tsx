import { useState } from "react";

const branchLocations = [
  { address: "23, Awolowo Road Ikoyi" },
  { address: "Kings Plaza, 80, Adeniran Ogunsanya Street, Surulere" },
  { address: "Pentagon Plaza, 23 Opebi Road, Ikeja" },
];

const contactInfo = [
  {
    icon: "https://c.animaapp.com/Jcn9P2bP/img/phone.svg",
    alt: "Phone",
    text: "0700 5000 500",
  },
  {
    icon: "https://c.animaapp.com/Jcn9P2bP/img/at.svg",
    alt: "At",
    text: "hello@renmoney.com",
  },
];

export const Referral = (): JSX.Element => {
  const [copied, setCopied] = useState(false);

  const referralLink = "renmoney/ref/6276427.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(referralLink).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div
      className="relative w-[1280px] h-[906px] bg-deepblue-100"
      data-model-id="417:9484"
    >
      <header className="flex w-[calc(100%_-_180px)] h-16 items-center justify-between px-0 py-3 absolute top-0 left-[90px] bg-transparent">
        <div className="relative w-32 h-8 aspect-[4]">
          <img
            className="absolute w-[73.68%] h-[92.14%] top-[7.86%] left-[26.32%]"
            alt="Group"
            src="https://c.animaapp.com/Jcn9P2bP/img/group@2x.png"
          />
          <img
            className="absolute w-[73.55%] h-[51.94%] top-[48.06%] left-[26.45%]"
            alt="Group"
            src="https://c.animaapp.com/Jcn9P2bP/img/group-1@2x.png"
          />
          <img
            className="absolute w-full h-[92.86%] top-[7.14%] left-0"
            alt="Group"
            src="https://c.animaapp.com/Jcn9P2bP/img/group-2@2x.png"
          />
        </div>

        <div className="inline-flex h-8 justify-center gap-1 pt-[var(--collection-1-0)] pb-[var(--collection-1-0)] px-1 items-center relative flex-[0_0_auto]">
          <img
            className="relative w-6 h-6 aspect-[1]"
            alt="User"
            src="https://c.animaapp.com/Jcn9P2bP/img/user.svg"
          />
        </div>
      </header>

      <div className="flex flex-col w-[540px] items-start justify-center pt-6 pb-8 px-8 absolute top-[76px] left-[370px] bg-deepblue-140 rounded-3xl">
        <div className="flex flex-col items-start pt-2 pb-9 px-0 w-full flex-[0_0_auto] relative self-stretch">
          <div className="mt-[-1.00px] font-header-1 font-[number:var(--header-1-font-weight)] text-white text-[length:var(--header-1-font-size)] tracking-[var(--header-1-letter-spacing)] leading-[var(--header-1-line-height)] relative self-stretch [font-style:var(--header-1-font-style)]">
            Invite 2 businesses from your network
          </div>

          <div className="h-0.5 relative self-stretch w-full" />

          <p className="relative self-stretch font-body-medium font-[number:var(--body-medium-font-weight)] text-gray-70 text-[length:var(--body-medium-font-size)] tracking-[var(--body-medium-letter-spacing)] leading-[var(--body-medium-line-height)] [font-style:var(--body-medium-font-style)]">
            After they join, you&apos;ll both get early access and bonuses
          </p>

          <div className="h-5 relative self-stretch w-full" />

          <div className="flex flex-col items-start gap-2.5 relative self-stretch w-full flex-[0_0_auto] bg-deepcloudyblue-100 rounded-[30px]">
            <div className="relative self-stretch w-full h-1 bg-white rounded-[30px]" />
          </div>
        </div>

        <div className="items-center gap-2 self-stretch w-full flex-[0_0_auto] flex relative">
          <div className="flex-col h-[68px] items-start justify-around p-4 flex-1 grow bg-deepcloudyblue-100 rounded-[20px] flex relative">
            <div className="self-stretch w-full flex-[0_0_auto] mt-[-6.00px] mb-[-6.00px] flex flex-col items-start justify-center gap-0.5 relative">
              <div className="flex items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
                <div className="relative flex-1 mt-[-1.00px] font-header-3 font-[number:var(--header-3-font-weight)] text-white text-[length:var(--header-3-font-size)] tracking-[var(--header-3-letter-spacing)] leading-[var(--header-3-line-height)] overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:1] [-webkit-box-orient:vertical] [font-style:var(--header-3-font-style)]">
                  0 of 2
                </div>
              </div>
              <div className="flex items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
                <div className="relative flex-1 mt-[-1.00px] font-body-medium font-[number:var(--body-medium-font-weight)] text-gray-70 text-[length:var(--body-medium-font-size)] tracking-[var(--body-medium-letter-spacing)] leading-[var(--body-medium-line-height)] overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:1] [-webkit-box-orient:vertical] [font-style:var(--body-medium-font-style)]">
                  Joined
                </div>
              </div>
            </div>
          </div>

          <div className="flex-col h-[68px] items-start justify-around p-4 flex-1 grow bg-deepcloudyblue-100 rounded-[20px] flex relative">
            <div className="w-[124px] flex-[0_0_auto] mt-[-6.00px] mb-[-6.00px] flex flex-col items-start justify-center gap-0.5 relative">
              <div className="flex items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
                <div className="relative flex-1 mt-[-1.00px] font-header-3 font-[number:var(--header-3-font-weight)] text-white text-[length:var(--header-3-font-size)] tracking-[var(--header-3-letter-spacing)] leading-[var(--header-3-line-height)] overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:1] [-webkit-box-orient:vertical] [font-style:var(--header-3-font-style)]">
                  0
                </div>
              </div>
              <div className="flex items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
                <div className="relative flex-1 mt-[-1.00px] font-body-medium font-[number:var(--body-medium-font-weight)] text-gray-70 text-[length:var(--body-medium-font-size)] tracking-[var(--body-medium-letter-spacing)] leading-[var(--body-medium-line-height)] overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:1] [-webkit-box-orient:vertical] [font-style:var(--body-medium-font-style)]">
                  Pending
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="h-2 relative self-stretch w-full" />

        <div className="flex flex-col items-start p-4 relative self-stretch w-full flex-[0_0_auto] bg-deepcloudyblue-100 rounded-[20px]">
          <div className="flex flex-col items-start justify-center gap-0.5 relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
              <p className="relative flex-1 mt-[-1.00px] font-body-medium font-[number:var(--body-medium-font-weight)] text-gray-70 text-[length:var(--body-medium-font-size)] tracking-[var(--body-medium-letter-spacing)] leading-[var(--body-medium-line-height)] overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:1] [-webkit-box-orient:vertical] [font-style:var(--body-medium-font-style)]">
                Your referral link, share to invite
              </p>
            </div>
            <div className="flex items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
              <div className="relative flex-1 mt-[-1.00px] font-header-3 font-[number:var(--header-3-font-weight)] text-white text-[length:var(--header-3-font-size)] tracking-[var(--header-3-letter-spacing)] leading-[var(--header-3-line-height)] overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:1] [-webkit-box-orient:vertical] [font-style:var(--header-3-font-style)]">
                {referralLink}
              </div>
            </div>
          </div>

          <div className="h-6 relative self-stretch w-full" />

          <div className="flex flex-col self-stretch w-full items-center relative flex-[0_0_auto]">
            <button
              type="button"
              onClick={handleCopy}
              className="flex h-[52px] items-center justify-center gap-1 px-5 py-2 relative self-stretch w-full bg-white rounded-[14px] backdrop-blur-sm backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(4px)_brightness(100%)] cursor-pointer"
            >
              <div className="inline-flex items-center justify-center gap-2.5 pt-0 pb-0.5 px-0 relative flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.00px] font-body-bold font-[number:var(--body-bold-font-weight)] text-black text-[length:var(--body-bold-font-size)] text-center tracking-[var(--body-bold-letter-spacing)] leading-[var(--body-bold-line-height)] whitespace-nowrap [font-style:var(--body-bold-font-style)]">
                  {copied ? "Copied!" : "Copy"}
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>

      <div className="absolute left-[calc(50.00%_-_272px)] bottom-0 w-[542px] h-[378px]">
        <div className="flex flex-col w-[238px] items-start absolute top-[236px] left-0.5">
          <div className="flex flex-col items-start justify-center gap-0.5 relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
              <div className="relative flex-1 mt-[-1.00px] font-body-bold font-[number:var(--body-bold-font-weight)] text-white text-[length:var(--body-bold-font-size)] tracking-[var(--body-bold-letter-spacing)] leading-[var(--body-bold-line-height)] overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:1] [-webkit-box-orient:vertical] [font-style:var(--body-bold-font-style)]">
                Contact us
              </div>
            </div>
          </div>

          <div className="h-2 relative self-stretch w-full" />

          {contactInfo.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-2 px-0 py-2 relative self-stretch w-full flex-[0_0_auto]"
            >
              <img
                className="relative w-6 h-6 aspect-[1]"
                alt={item.alt}
                src={item.icon}
              />
              <div className="flex-1 grow flex flex-col items-start justify-center gap-0.5 relative">
                <div className="flex items-center gap-2.5 pt-0.5 pb-0 px-0 relative self-stretch w-full flex-[0_0_auto]">
                  <div className="relative flex-1 mt-[-1.00px] font-body-medium-link font-[number:var(--body-medium-link-font-weight)] text-white text-[length:var(--body-medium-link-font-size)] tracking-[var(--body-medium-link-letter-spacing)] leading-[var(--body-medium-link-line-height)] underline overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:1] [-webkit-box-orient:vertical] [font-style:var(--body-medium-link-font-style)]">
                    {item.text}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col w-[296px] items-start absolute top-8 left-0.5">
          <div className="flex flex-col items-start justify-center gap-0.5 relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
              <div className="relative flex-1 mt-[-1.00px] font-body-bold font-[number:var(--body-bold-font-weight)] text-white text-[length:var(--body-bold-font-size)] tracking-[var(--body-bold-letter-spacing)] leading-[var(--body-bold-line-height)] overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:1] [-webkit-box-orient:vertical] [font-style:var(--body-bold-font-style)]">
                Visit a branch
              </div>
            </div>
          </div>

          <div className="h-2 relative self-stretch w-full" />

          {branchLocations.map((location, index) => (
            <div
              key={index}
              className="flex items-start gap-2 px-0 py-2 relative self-stretch w-full flex-[0_0_auto]"
            >
              <img
                className="relative w-6 h-6 aspect-[1]"
                alt="Map pin"
                src="https://c.animaapp.com/Jcn9P2bP/img/mappin-2.svg"
              />
              <div className="flex-1 grow flex flex-col items-start justify-center gap-0.5 relative">
                <div className="flex items-center gap-2.5 pt-0.5 pb-0 px-0 relative self-stretch w-full flex-[0_0_auto]">
                  <p className="relative flex-1 mt-[-1.00px] font-body-medium-link font-[number:var(--body-medium-link-font-weight)] text-white text-[length:var(--body-medium-link-font-size)] tracking-[var(--body-medium-link-letter-spacing)] leading-[var(--body-medium-link-line-height)] underline [font-style:var(--body-medium-link-font-style)]">
                    {location.address}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <img
          className="absolute top-8 right-0 w-[189px] h-[52px] aspect-[3.63]"
          alt="Logos"
          src="https://c.animaapp.com/Jcn9P2bP/img/logos.svg"
        />
      </div>
    </div>
  );
};
