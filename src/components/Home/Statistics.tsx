import React from 'react';
import Business from '../../assets/image/business-and-finance 1.png';
import Yen from '../../assets/image/yen 1.png';
import { TbArrowUp } from 'react-icons/tb';
import Card from '../UI/Card';
import ReactCountryFlag from 'react-country-flag';
import Progressbar from '../UI/Progressbar';
import { RxCaretDown, RxCaretUp } from 'react-icons/rx';

interface ICountry {
  countryCode: string;
  countryName: string;
  score: string;
  scorePercentage: string;
  increase?: boolean;
}

const Statistics = () => {
  const countryList: ICountry[] = [
    {
      countryCode: 'US',
      countryName: 'United States',
      score: '30K',
      increase: true,
      scorePercentage: '25.8',
    },
    {
      countryCode: 'BR',
      countryName: 'Brazil',
      score: '28K',
      scorePercentage: '30.8',
    },
    {
      countryCode: 'AU',
      countryName: 'Australia',
      score: '60K',
      scorePercentage: '60.8',
    },
  ];
  return (
    <>
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-7 lg:col-span-6 xl:col-span-4 ">
          <Card className="flex h-full items-center">
            <img src={Business} alt="" />
            <div className="block sm:flex justify-between grow md:block border-l xs:pl-8 xs:ml-8 pl-3 ml-3 ">
              <div className="textbox-01">
                <h5>Total Sales & Cost</h5>
                <h6>Last 7 days</h6>
              </div>

              <div className="mt-4 sm:mt-0 md:mt-7">
                <h1 className="text-2xl font-bold">$350K</h1>
                <p className="text-[#8B909A] text-sm font-medium flex items-center">
                  <span className="text-success flex items-center">
                    <TbArrowUp />
                    8.56K&nbsp;
                  </span>
                  vs last 7 days
                </p>
              </div>
            </div>
          </Card>
        </div>

        <div className="col-span-12 md:col-span-5 lg:col-span-6 xl:col-span-3">
          <Card className="block sm:flex justify-between md:block grow h-full">
            <div className="flex items-center">
              <img src={Yen} alt="" />
              <div className="ml-6 textbox-01">
                <h5>Total Profit</h5>
                <h6>Last 7 days</h6>
              </div>
            </div>

            <div className="mt-4 sm:mt-0 md:mt-7">
              <h1 className="text-2xl font-bold ">50K</h1>
              <p className="text-[#8B909A] text-sm font-medium flex items-center">
                <span className="text-success flex items-center">
                  <TbArrowUp />
                  12%&nbsp;
                </span>
                vs last 7 days
              </p>
            </div>
          </Card>
        </div>

        <Card className="col-span-12 xl:col-span-5 h-full">
          <ul className="list">
            {countryList.map((country, index) => (
              <li
                key={index}
                className="flex justify-between sm:grid grid-cols-12 xl:grid-cols-3 grid-flow-col gap-4 items-center"
              >
                <div className="grow sm:col-span-3 lg:col-span-2 xl:col-span-1">
                  <div className="flex items-center">
                    <div className="w-8 h-8 shrink-0">
                      <ReactCountryFlag
                        countryCode={country.countryCode}
                        svg
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          borderRadius: '50%',
                        }}
                      />
                    </div>
                    <div className="grow flex flex-row-reverse justify-between sm:block ml-3">
                      <h6 className="text-sm">{country.score}</h6>
                      <p className="text-[#8B909A] text-sm whitespace-nowrap	">
                        {country.countryName}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center sm:col-span-9 lg:col-span-10 xl:col-span-2">
                  <Progressbar
                    value={country.scorePercentage}
                    className={!country.increase ? 'decrease' : ''}
                  />
                  <div
                    className={`${country.increase ? 'text-success' : 'text-danger'} whitespace-nowrap text-sm flex items-center ml-3`}
                  >
                    {country.increase ? (
                      <RxCaretUp className="text-lg" display={'inline'} />
                    ) : (
                      <RxCaretDown className="text-lg" display={'inline'} />
                    )}
                    <span>{country.scorePercentage} %</span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </>
  );
};

export default Statistics;
