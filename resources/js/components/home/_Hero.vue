<template>
    <div class="hero absolute z-10">
        <h2 class="relative flex items-stretch">

            <span id="line-group"><span class="line-1"></span><span class="line-2"></span><span
                class="line-3"></span><span class="line-4"></span><span class="line-5"></span><span
                class="line-6"></span><span class="line-7"></span><span class="line-8"></span><span
                class="line-9"></span><span class="line-10"></span><span class="line-11"></span><span
                class="line-12"></span><span class="line-13"></span><span class="line-14"></span><span
                class="line-15"></span><span class="line-16"></span><span class="line-17"></span><span
                class="line-18"></span><span class="line-19"></span><span class="line-20"></span><span
                class="line-21"></span><span class="line-22"></span><span class="line-23"></span><span
                class="line-24"></span><span class="line-25"></span><span class="line-26"></span><span
                class="line-27"></span><span class="line-28"></span><span class="line-29"></span><span
                class="line-30"></span><span class="line-31"></span><span class="line-32"></span><span
                class="line-33"></span><span class="line-34"></span><span class="line-35"></span><span
                class="line-36"></span><span class="line-37"></span><span class="line-38"></span><span
                class="line-39"></span><span class="line-40"></span><span class="line-41"></span><span
                class="line-42"></span><span class="line-43"></span><span class="line-44"></span><span
                class="line-45"></span><span class="line-46"></span><span class="line-47"></span><span
                class="line-48"></span><span class="line-49"></span><span class="line-50"></span><span
                class="line-51"></span><span class="line-52"></span><span class="line-53"></span><span
                class="line-54"></span><span class="line-55"></span><span class="line-56"></span><span
                class="line-57"></span><span class="line-58"></span><span class="line-59"></span><span
                class="line-60"></span><span class="line-61"></span><span class="line-62"></span><span
                class="line-63"></span><span class="line-64"></span><span class="line-65"></span><span
                class="line-66"></span><span class="line-67"></span><span class="line-68"></span><span
                class="line-69"></span><span class="line-70"></span><span class="line-71"></span><span
                class="line-72"></span><span class="line-73"></span><span class="line-74"></span><span
                class="line-75"></span><span class="line-76"></span></span>

            <svg width="54" height="86"
                 class="mr-7"
                 data-aos="fade-up"
                 data-aos-delay="600"
            >
                <text x="0" y="0"
                      dominant-baseline="hanging"
                      data-aos="fill-animation"
                      data-aos-delay="800"
                >N
                </text>
            </svg>

            <svg width="54" height="86" class="mr-7"
                 data-aos="fade-up"
                 data-aos-delay="800"
            >
                <text x="0" y="0"
                      dominant-baseline="hanging"
                      data-aos="fill-animation"
                      data-aos-delay="1000"
                >A
                </text>
            </svg>

            <svg width="54" height="86"
                 class="mr-7"
                 data-aos="fade-up"
                 data-aos-delay="1000"
            >
                <text x="0" y="0"
                      dominant-baseline="hanging"
                      data-aos="fill-animation"
                      data-aos-delay="1200"
                >N
                </text>
            </svg>

            <svg width="54" height="86"
                 data-aos="fade-up"
                 data-aos-delay="1200"
            >
                <text x="0" y="0"
                      dominant-baseline="hanging"
                      data-aos="fill-animation"
                      data-aos-delay="1400"
                >A
                </text>
            </svg>
        </h2>

        <p class="sub font-fotura"
           data-aos="fade-up"
        >
            Eyelash Extensions Salon.
        </p>

        <div class="flex md:flex-col">
            <div data-aos="fade-in"
                 data-aos-delay="400"
            >
                <img :src="line" alt="break-line" class="line md:my-16 sm:my-0">
            </div>

            <ul class="sm:text-15 font-fotura tracking-loosest leading-loosest flex md:flex-col"
                data-aos="fade-up"
                data-aos-delay="200"
            >
                <li>Milano</li>
                <li>Le Rochelle</li>
                <li>Lisbon</li>
            </ul>
        </div>
    </div>
</template>

<script>
    import line from '../../../../public/storage/icon/line.png';

    export default {
        data() {
            return {
                line: line
            };
        },
    }
</script>

<style scoped lang="scss">
    .hero {
        top: 20%;
        left: 10%;

        text {
            fill: rgba(255, 255, 255, 0);
            stroke: #333;
            font-size: 76px;
            stroke-width: .8;
            stroke-linejoin: round;
            line-height: 1;
        }

        [data-aos="fill-animation"] {
            fill: #c3b282;
            transition-property: fill;

            &.aos-animate {
                fill: transparent;
            }
        }

        .sub {
            letter-spacing: .3em;
        }

        .line {
            width: 72px;
            height: auto;
        }

        li {
            padding-right: 8px;
        }

        @media only screen and (max-width: 768px) {
            top: 85%;
            left: 16px;

            .line {
                width: 48px;
            }
        }
    }

    @for $i from 1 through 76 {
        .line-#{$i} {
            position: relative;
            display: inline-block;
            width: 4px;
            height: 4px;
            border-radius: 100%;

            @if ($i < 19) {
                animation: bump-#{$i} .8s linear (.6 + #{$i}s);
            } @else if ($i < 38) {
                animation: bump-#{$i} .8s linear (.8 + #{$i}s);
            } @else if ($i < 57) {
                animation: bump-#{$i} .8s linear (1.0 + #{$i}s);
            } @else {
                animation: bump-#{$i} .8s linear (1.2 + #{$i}s);
            }

        }

        @keyframes bump-#{$i} {
            0% {
                background-color: transparent;
                bottom: random(60) + px;
                left: random(10) + px;
            }

            50% {
                background-color: #ffed4a;
                bottom: random(80) + px;
                left: random(20) + px;
            }

            100% {
                background-color: transparent;
                bottom: random(60) + px;
                left: random(10) + px;
            }
        }
    }

    #line-group {
        position: absolute;
        top: 50%;
        left: 0;
        width: 100%;
        height: 100%;
    }
</style>
