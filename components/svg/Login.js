import * as React from "react"
import Svg, {
  G,
  Path,
  Defs,
  LinearGradient,
  Stop,
  ClipPath,
} from "react-native-svg"

const SvgComponent = (props) => (
  <Svg
    width={400}
    height={277}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path
        opacity={0.1}
        d="M224.194 41.37c-25.64.035-50.319-7.233-73.924-15.307-23.606-8.075-47.03-17.116-72.192-20.947C61.895 2.653 43.493 2.88 30.843 11.82c-12.177 8.603-15.703 22.84-17.404 35.994-1.28 9.896-1.87 20.282 2.922 29.333 3.327 6.284 9.021 11.463 13.034 17.452 14.009 20.833 5.584 47.446-8.03 68.764-6.383 10.001-13.86 19.588-18.686 30.163-4.826 10.574-6.805 22.565-1.883 33.003 4.877 10.344 15.895 17.853 27.718 22.98 24.01 10.434 51.965 12.671 79.168 13.531 60.218 1.911 120.552-1.985 180.725-5.882 22.268-1.44 44.635-2.891 66.443-7.066 12.108-2.315 24.577-5.752 33.162-13.284 10.897-9.563 13.127-25.176 5.196-36.398-13.298-18.824-48.363-22.374-57.898-42.741-5.259-11.213-.724-24.072 5.954-34.879 14.324-23.19 38.979-43.962 39.394-69.9.285-17.811-12.537-35.187-31.687-42.929-20.072-8.108-47.44-6.023-61.504 9.09-14.461 15.568-40.635 22.294-63.273 22.319Z"
        fill="url(#b)"
      />
      <Path
        d="M340.441 221.355s-4.216-2.781-8.393-.802c0 0 1.286 2.476 6.575 2.243l1.818-1.441Z"
        fill="url(#c)"
      />
      <Path
        d="M340.976 221.503s1.283 4.884-1.935 8.208c0 0-1.934-2.014 0-6.946l1.935-1.262Z"
        fill="url(#d)"
      />
      <Path
        d="M346.217 216.814s-.312-4.154-9.693-2.775c0 0-.045 2.679 3.248 3.948 3.293 1.269 4.802.199 6.445-1.173Z"
        fill="url(#e)"
      />
      <Path
        d="M346.807 216.786s3.965 1.273.429 10.071c0 0-2.617-.583-3.087-4.085-.47-3.502.923-4.71 2.658-5.986Z"
        fill="url(#f)"
      />
      <Path
        d="M352.103 210.894s.539-6.836-9.048-6.136c0 0-.686 6.174 7.357 7.779l1.691-1.643Z"
        fill="url(#g)"
      />
      <Path
        d="M358.438 203.176s-1.313-7.748-10.897-5.44c0 0-.034 6.699 9.333 7.286l1.564-1.846Z"
        fill="url(#h)"
      />
      <Path
        d="M363.069 195.198s-2.202-7.546-11.697-5.289c0 0 2.261 6.788 11.066 6.682l.631-1.393Z"
        fill="url(#i)"
      />
      <Path
        d="M367.466 187.406s-2.15-7.831-11.319-5.488c0 0 3.06 7.439 10.712 6.812l.607-1.324Z"
        fill="url(#j)"
      />
      <Path
        d="M370.299 180.004s-1.653-9.577-10.2-7.457c0 0 2.483 8.712 9.573 8.853l.627-1.396Z"
        fill="url(#k)"
      />
      <Path
        d="M372.958 171.062s-1.986-9.652-10.634-6.86c0 0 3.389 9.124 10.02 8.18l.614-1.32Z"
        fill="url(#l)"
      />
      <Path
        d="M374.59 162.741s-3.152-9.656-9.837-9.395c0 0 3.221 10.197 9.278 11.319l.559-1.924Z"
        fill="url(#m)"
      />
      <Path
        d="M375.647 154.619s-3.43-11.621-8.87-10.726c0 0 2.373 8.884 8.678 12.537l.192-1.811Z"
        fill="url(#n)"
      />
      <Path
        d="M376.244 144.929s-3.218-9.683-8.576-10.07c0 0 2.189 9.528 8.469 12.588l.107-2.518Z"
        fill="url(#o)"
      />
      <Path
        d="M376.892 135.888s-4.01-9.693-7.546-9.913c0 0 1.742 9.546 7.203 11.504l.343-1.591Z"
        fill="url(#p)"
      />
      <Path
        d="M377.334 127.478s-2.466-10.527-6.009-11.402c0 0 .484 8.613 5.653 12.19l.356-.788Z"
        fill="url(#q)"
      />
      <Path
        d="M378.672 116.46s-2.593-8.393-5.464-9.672c0 0 .566 9.895 4.802 11.723l.662-2.051Z"
        fill="url(#r)"
      />
      <Path
        d="m379.78 109.258.521-14.797s-5.368 11.154-.909 17.393l.388-2.596Z"
        fill="url(#s)"
      />
      <Path
        d="M383.923 94.54s3.866-10.805 4.802-11.408c0 0-7.58 7.01-6.839 16.028l2.037-4.62Z"
        fill="url(#t)"
      />
      <Path
        d="M352.364 210.842s6.798-.888 6.596 8.719c0 0-6.143 1.002-8.15-6.945l1.554-1.774Z"
        fill="url(#u)"
      />
      <Path
        d="M358.761 202.916s7.854-.024 7.203 9.809c0 0-6.596 1.18-8.771-7.95l1.568-1.859Z"
        fill="url(#v)"
      />
      <Path
        d="M363.144 195.833s7.131-3.344 11.693 5.289c0 0-6.585 2.785-12.324-3.893l.631-1.396Z"
        fill="url(#w)"
      />
      <Path
        d="M367.624 187.478s7.302-3.557 11.59 4.874c0 0-7.608 2.62-12.194-3.54l.604-1.334Z"
        fill="url(#x)"
      />
      <Path
        d="M370.207 180.213s7.028-6.712 12.636.075c0 0-7.179 5.526-12.959 1.42l.323-1.495Z"
        fill="url(#y)"
      />
      <Path
        d="M372.56 170.832s7.069-6.86 12.633.316c0 0-7.934 5.635-12.887 1.125l.254-1.441Z"
        fill="url(#z)"
      />
      <Path
        d="M373.88 162.466s5.447-8.574 11.861-6.661c0 0-5.652 9.08-11.799 8.675l-.062-2.014Z"
        fill="url(#A)"
      />
      <Path
        d="M375.485 154.564s5.489-10.798 10.682-8.918c0 0-3.959 8.3-10.822 10.739l.14-1.821Z"
        fill="url(#B)"
      />
      <Path
        d="M375.866 144.367s5.643-8.5 10.928-7.461c0 0-4.613 8.62-11.476 9.92l.548-2.459Z"
        fill="url(#C)"
      />
      <Path
        d="M376.305 135.699s4.374-9.539 7.927-9.604c0 0-2.099 9.47-7.632 11.223l-.295-1.619Z"
        fill="url(#D)"
      />
      <Path
        d="M377.163 127.272s4.86-9.659 8.513-9.68c0 0-2.487 8.26-8.352 10.527l-.161-.847Z"
        fill="url(#E)"
      />
      <Path
        d="M377.893 117.064s3.636-7.992 6.648-8.897c0 0-1.818 9.741-6.246 11.017l-.402-2.12Z"
        fill="url(#F)"
      />
      <Path
        d="m380.212 108.966 8.126-12.379s-2.082 12.211-9.313 14.749l1.187-2.37Z"
        fill="url(#G)"
      />
      <Path
        d="M385.789 95.538s9.443-6.517 9.786-7.57c0 0-4.802 9.127-13.72 10.739l3.934-3.17Z"
        fill="url(#H)"
      />
      <Path
        d="M386.355 92.605s10.843-10.424 13.611-10.413c0 0-8.942.408-13.871 9.857l.26.556Z"
        fill="url(#I)"
      />
      <Path
        d="m378 118.611.394.051c2.038-15.945 5.008-25.381 8.363-26.537l-.131-.377c-3.557 1.234-6.548 10.526-8.626 26.863Z"
        fill="#444053"
      />
      <Path
        d="m375.002 156.745.597.048c.127-1.489.223-3.011.288-4.531.569-13.198 1.451-25.32 2.61-34.406l-.343-.429c-1.163 9.107-2.295 21.592-2.864 34.811a106.915 106.915 0 0 1-.288 4.507Z"
        fill="#444053"
      />
      <Path
        d="M329.314 228.963c.103-.045 10.609-4.737 21.513-15.925a86.513 86.513 0 0 0 15.727-22.295c5.042-10.266 8.115-22.881 9.144-35.137l-.62.292c-2.316 27.508-14.839 46.304-24.796 56.543-10.798 11.089-21.188 15.733-21.29 15.778l.322.744Z"
        fill="#444053"
      />
      <Path
        opacity={0.05}
        d="M324.779 72.821h-269.6v118.546h269.6V72.821Z"
        fill="#4C4A5E"
      />
      <Path d="M324.138 76.83H58.654v115.933h265.484V76.831Z" fill="#3F3D56" />
      <Path
        d="M129.611 103.557a26.415 26.415 0 0 0-24.401 16.304 26.41 26.41 0 0 0 46.361 24.779 26.409 26.409 0 0 0-21.96-41.083Zm4.736 27.045v12.506h-9.336v-12.506a7.735 7.735 0 1 1 9.336 0Z"
        fill="url(#J)"
      />
      <Path
        opacity={0.05}
        d="M129.611 103.557a26.415 26.415 0 0 0-24.401 16.304 26.41 26.41 0 0 0 46.361 24.779 26.409 26.409 0 0 0-21.96-41.083Zm4.736 27.045v12.506h-9.336v-12.506a7.735 7.735 0 1 1 9.336 0Z"
        fill="#4C4A5E"
      />
      <Path
        d="M129.611 96.011a33.956 33.956 0 1 0 0 67.913 33.956 33.956 0 0 0 0-67.913Zm6.088 34.773v16.076h-12.005v-16.076a9.95 9.95 0 0 1-3.427-11.098 9.945 9.945 0 0 1 18.859 0 9.941 9.941 0 0 1-3.427 11.098Z"
        fill="url(#K)"
      />
      <Path d="M287.392 125.512H177.631v11.662h109.761v-11.662Z" fill="#fff" />
      <Path
        d="M188.436 131.168h-1.986l1.766-1.763a.173.173 0 0 0 .049-.122.17.17 0 0 0-.292-.121l-1.767 1.766v-1.989a.172.172 0 0 0-.171-.172.175.175 0 0 0-.172.172v1.989l-1.763-1.777a.161.161 0 0 0-.056-.037.169.169 0 0 0-.187.037.176.176 0 0 0-.05.122c0 .045.018.089.05.122l1.766 1.763h-1.989a.175.175 0 0 0-.172.171c0 .046.018.089.05.122.032.032.076.05.122.05h1.989l-1.766 1.766a.176.176 0 0 0-.05.122c0 .045.018.089.05.122a.177.177 0 0 0 .243 0l1.763-1.767v1.986c0 .046.018.089.05.122a.172.172 0 0 0 .293-.122v-1.986l1.767 1.767a.177.177 0 0 0 .243 0 .175.175 0 0 0 0-.244l-1.766-1.766h1.986a.172.172 0 0 0 .171-.172.168.168 0 0 0-.054-.114.17.17 0 0 0-.117-.047Z"
        fill="url(#L)"
      />
      <Path
        d="M195.639 131.168h-1.986l1.766-1.763a.172.172 0 0 0-.243-.243l-1.767 1.766v-1.989a.172.172 0 0 0-.171-.172.175.175 0 0 0-.172.172v1.989l-1.763-1.777a.161.161 0 0 0-.056-.037.169.169 0 0 0-.187.037.176.176 0 0 0-.05.122c0 .045.018.089.05.122l1.766 1.763h-1.989a.175.175 0 0 0-.172.171c0 .046.018.089.05.122.033.032.076.05.122.05h1.989l-1.766 1.766a.176.176 0 0 0-.05.122c0 .045.018.089.05.122a.177.177 0 0 0 .243 0l1.763-1.767v1.986c0 .046.018.089.05.122a.172.172 0 0 0 .293-.122v-1.986l1.767 1.767a.177.177 0 0 0 .243 0 .176.176 0 0 0 .05-.122.176.176 0 0 0-.05-.122l-1.766-1.766h1.986a.172.172 0 0 0 .171-.172.168.168 0 0 0-.054-.114.17.17 0 0 0-.117-.047Z"
        fill="url(#M)"
      />
      <Path
        d="M202.842 131.168h-1.986l1.766-1.763a.172.172 0 0 0-.243-.243l-1.767 1.766v-1.989a.172.172 0 0 0-.171-.172.175.175 0 0 0-.172.172v1.989l-1.763-1.777a.161.161 0 0 0-.056-.037.169.169 0 0 0-.187.037.176.176 0 0 0-.05.122c0 .045.018.089.05.122l1.766 1.763h-1.989a.175.175 0 0 0-.172.171c0 .046.018.089.05.122.033.032.076.05.122.05h1.989l-1.766 1.766a.176.176 0 0 0-.05.122c0 .045.018.089.05.122a.177.177 0 0 0 .243 0l1.763-1.767v1.986c0 .046.018.089.05.122a.172.172 0 0 0 .293-.122v-1.986l1.767 1.767a.177.177 0 0 0 .243 0 .176.176 0 0 0 .05-.122.176.176 0 0 0-.05-.122l-1.766-1.766h1.986a.172.172 0 0 0 .171-.172.172.172 0 0 0-.171-.161Z"
        fill="url(#N)"
      />
      <Path
        d="M210.045 131.168h-1.986l1.766-1.763a.172.172 0 0 0-.243-.243l-1.767 1.766v-1.989a.172.172 0 0 0-.171-.172.177.177 0 0 0-.121.051.18.18 0 0 0-.051.121v1.989l-1.763-1.777a.161.161 0 0 0-.056-.037.162.162 0 0 0-.066-.013.16.16 0 0 0-.065.013.161.161 0 0 0-.056.037.176.176 0 0 0-.05.122c0 .045.018.089.05.122l1.766 1.763h-1.989a.177.177 0 0 0-.121.051.18.18 0 0 0-.051.12.171.171 0 0 0 .172.172h1.989l-1.766 1.766a.176.176 0 0 0-.05.122c0 .045.018.089.05.122a.177.177 0 0 0 .243 0l1.763-1.767v1.986a.171.171 0 0 0 .172.172.172.172 0 0 0 .171-.172v-1.986l1.767 1.767a.177.177 0 0 0 .243 0 .176.176 0 0 0 .05-.122.176.176 0 0 0-.05-.122l-1.766-1.766h1.986a.172.172 0 0 0 .171-.172.172.172 0 0 0-.171-.161Z"
        fill="url(#O)"
      />
      <Path
        d="M217.248 131.168h-1.986l1.766-1.763a.172.172 0 0 0-.243-.243l-1.767 1.766v-1.989a.172.172 0 0 0-.171-.172.175.175 0 0 0-.172.172v1.989l-1.763-1.777a.167.167 0 0 0-.121-.05.165.165 0 0 0-.066.013.161.161 0 0 0-.056.037.176.176 0 0 0-.05.122c0 .045.018.089.05.122l1.766 1.763h-1.989a.175.175 0 0 0-.172.171.171.171 0 0 0 .172.172h1.989l-1.766 1.766a.176.176 0 0 0-.05.122c0 .045.018.089.05.122a.177.177 0 0 0 .243 0l1.763-1.767v1.986a.171.171 0 0 0 .172.172.172.172 0 0 0 .171-.172v-1.986l1.767 1.767a.177.177 0 0 0 .243 0 .176.176 0 0 0 .05-.122.176.176 0 0 0-.05-.122l-1.766-1.766h1.986a.172.172 0 0 0 .171-.172.172.172 0 0 0-.171-.161Z"
        fill="url(#P)"
      />
      <Path
        d="M224.451 131.168h-1.986l1.766-1.763a.172.172 0 0 0-.243-.243l-1.767 1.766v-1.989a.172.172 0 0 0-.171-.172.175.175 0 0 0-.172.172v1.989l-1.763-1.777a.167.167 0 0 0-.121-.05.165.165 0 0 0-.066.013.161.161 0 0 0-.056.037.175.175 0 0 0 0 .244l1.766 1.763h-1.989a.175.175 0 0 0-.172.171.171.171 0 0 0 .172.172h1.989l-1.766 1.766a.175.175 0 0 0 0 .244.177.177 0 0 0 .243 0l1.763-1.767v1.986c0 .046.019.089.051.122a.17.17 0 0 0 .242 0 .174.174 0 0 0 .05-.122v-1.986l1.767 1.767a.177.177 0 0 0 .243 0 .176.176 0 0 0 .05-.122.176.176 0 0 0-.05-.122l-1.766-1.766h1.986a.172.172 0 0 0 .171-.172.172.172 0 0 0-.171-.161Z"
        fill="url(#Q)"
      />
      <Path
        d="M231.654 131.168h-1.986l1.767-1.763a.175.175 0 0 0 0-.243.169.169 0 0 0-.188-.038.164.164 0 0 0-.056.038l-1.766 1.766v-1.989a.173.173 0 0 0-.172-.172.175.175 0 0 0-.171.172v1.989l-1.764-1.777a.169.169 0 0 0-.187-.037.161.161 0 0 0-.056.037.175.175 0 0 0 0 .244l1.766 1.763h-1.989a.175.175 0 0 0-.172.171c0 .046.019.089.051.122a.17.17 0 0 0 .121.05h1.989l-1.766 1.766a.175.175 0 0 0 0 .244.177.177 0 0 0 .243 0l1.764-1.767v1.986a.172.172 0 1 0 .343 0v-1.986l1.766 1.767a.179.179 0 0 0 .244 0 .18.18 0 0 0 .049-.122.18.18 0 0 0-.049-.122l-1.767-1.766h1.986a.17.17 0 0 0 .121-.05.175.175 0 0 0 .051-.122.173.173 0 0 0-.172-.161Z"
        fill="url(#R)"
      />
      <Path
        d="M238.857 131.168h-1.986l1.767-1.763a.175.175 0 0 0 0-.243.169.169 0 0 0-.188-.038.164.164 0 0 0-.056.038l-1.766 1.766v-1.989a.173.173 0 0 0-.172-.172.175.175 0 0 0-.171.172v1.989l-1.763-1.777a.169.169 0 0 0-.188-.037.161.161 0 0 0-.056.037.175.175 0 0 0 0 .244l1.766 1.763h-1.989a.175.175 0 0 0-.171.171.172.172 0 0 0 .171.172h1.989l-1.766 1.766a.175.175 0 0 0 0 .244.179.179 0 0 0 .244 0l1.763-1.767v1.986a.172.172 0 1 0 .343 0v-1.986l1.766 1.767a.179.179 0 0 0 .244 0 .18.18 0 0 0 .049-.122.18.18 0 0 0-.049-.122l-1.767-1.766h1.986a.171.171 0 0 0 .172-.172.173.173 0 0 0-.172-.161Z"
        fill="url(#S)"
      />
      <Path
        d="M246.06 131.168h-1.986l1.767-1.763a.175.175 0 0 0 0-.243.169.169 0 0 0-.188-.038.164.164 0 0 0-.056.038l-1.766 1.766v-1.989a.17.17 0 0 0-.051-.122.17.17 0 0 0-.241.001.175.175 0 0 0-.051.121v1.989l-1.763-1.777a.169.169 0 0 0-.188-.037.161.161 0 0 0-.056.037.175.175 0 0 0 0 .244l1.767 1.763h-1.99a.175.175 0 0 0-.171.171.172.172 0 0 0 .171.172h1.99l-1.767 1.766a.175.175 0 0 0 0 .244.179.179 0 0 0 .244 0l1.763-1.767v1.986a.172.172 0 1 0 .343 0v-1.986l1.766 1.767a.179.179 0 0 0 .244 0 .18.18 0 0 0 .049-.122.18.18 0 0 0-.049-.122l-1.767-1.766h1.986a.171.171 0 0 0 .172-.172.173.173 0 0 0-.172-.161Z"
        fill="url(#T)"
      />
      <Path
        d="M253.263 131.168h-1.986l1.767-1.763a.175.175 0 0 0 0-.243.165.165 0 0 0-.122-.051.165.165 0 0 0-.122.051l-1.766 1.766v-1.989a.17.17 0 0 0-.051-.122.17.17 0 0 0-.241.001.175.175 0 0 0-.051.121v1.989l-1.763-1.777a.161.161 0 0 0-.056-.037.165.165 0 0 0-.066-.013.165.165 0 0 0-.066.013.161.161 0 0 0-.056.037.175.175 0 0 0 0 .244l1.767 1.763h-1.99a.175.175 0 0 0-.171.171.172.172 0 0 0 .171.172h1.99l-1.767 1.766a.175.175 0 0 0 0 .244.179.179 0 0 0 .244 0l1.763-1.767v1.986a.172.172 0 1 0 .343 0v-1.986l1.766 1.767a.179.179 0 0 0 .244 0 .18.18 0 0 0 .049-.122.18.18 0 0 0-.049-.122l-1.767-1.766h1.986a.171.171 0 0 0 .172-.172.173.173 0 0 0-.172-.161Z"
        fill="url(#U)"
      />
      <Path
        d="M260.466 131.168h-1.986l1.767-1.763a.175.175 0 0 0 0-.243.165.165 0 0 0-.122-.051.165.165 0 0 0-.122.051l-1.766 1.766v-1.989a.172.172 0 0 0-.05-.122.174.174 0 0 0-.122-.05.175.175 0 0 0-.171.172v1.989l-1.763-1.777a.161.161 0 0 0-.056-.037.165.165 0 0 0-.066-.013.165.165 0 0 0-.066.013.161.161 0 0 0-.056.037.18.18 0 0 0-.049.122.18.18 0 0 0 .049.122l1.767 1.763h-1.99a.175.175 0 0 0-.171.171.172.172 0 0 0 .171.172h1.99l-1.767 1.766a.18.18 0 0 0-.049.122.18.18 0 0 0 .049.122.179.179 0 0 0 .244 0l1.763-1.767v1.986a.172.172 0 1 0 .343 0v-1.986l1.766 1.767a.179.179 0 0 0 .244 0 .18.18 0 0 0 .049-.122.18.18 0 0 0-.049-.122l-1.767-1.766h1.986a.174.174 0 0 0 .122-.05.174.174 0 0 0 .05-.122.173.173 0 0 0-.172-.161Z"
        fill="url(#V)"
      />
      <G opacity={0.1} fill="#4C4A5E">
        <Path
          opacity={0.1}
          d="M293.916 167.786a70.971 70.971 0 0 1-3.224 10.931c.236-.47.435-.963.624-1.454a70.729 70.729 0 0 0 3.241-10.976c.978-4.664 1.352-9.947-1.495-13.771-.686-.912-1.568-1.9-1.537-2.97-.253.323-.45.687-.583 1.077-.343 1.238.707 2.366 1.475 3.395 2.847 3.818 2.473 9.107 1.499 13.768ZM292.136 148.088a3.34 3.34 0 0 0 .603-1.156 5.851 5.851 0 0 0-.041-1.53 1.654 1.654 0 0 0-.569.786c-.202.607.031 1.265.007 1.9ZM312.579 178.985a2.465 2.465 0 0 1-.906.83c-.479.17-.998.196-1.492.076-2.294-.343-4.802-1.05-6.832.058-1.101.597-1.956 1.681-3.18 1.955-2.027.453-3.756-1.492-5.759-2.058-1.42-.394-2.916-.069-4.346.343a6.01 6.01 0 0 1-1.135 1.64c1.578-.453 3.255-.909 4.836-.47 2.003.555 3.732 2.5 5.763 2.058 1.221-.271 2.078-1.355 3.176-1.955 2.058-1.108 4.538-.412 6.832-.055.495.116 1.012.09 1.492-.076.368-.197.679-.484.906-.833a9.196 9.196 0 0 0 1.42-2.717 9.87 9.87 0 0 1-.775 1.204Z"
        />
      </G>
    </G>
    <Defs>
      <LinearGradient
        id="b"
        x1={197.943}
        y1={3.773}
        x2={197.943}
        y2={263.543}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0.5} stopColor="#3F3D56" />
        <Stop offset={0.995} stopColor="#FF057D" />
      </LinearGradient>
      <LinearGradient
        id="c"
        x1={336.244}
        y1={219.842}
        x2={336.244}
        y2={222.811}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0.5} stopColor="#3F3D56" />
        <Stop offset={0.995} stopColor="#FF057D" />
      </LinearGradient>
      <LinearGradient
        id="d"
        x1={339.705}
        y1={221.503}
        x2={339.705}
        y2={229.711}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0.5} stopColor="#3F3D56" />
        <Stop offset={0.995} stopColor="#FF057D" />
      </LinearGradient>
      <LinearGradient
        id="e"
        x1={341.371}
        y1={213.759}
        x2={341.371}
        y2={218.553}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0.5} stopColor="#3F3D56" />
        <Stop offset={0.995} stopColor="#FF057D" />
      </LinearGradient>
      <LinearGradient
        id="f"
        x1={346.38}
        y1={216.786}
        x2={346.38}
        y2={226.857}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0.5} stopColor="#3F3D56" />
        <Stop offset={0.995} stopColor="#FF057D" />
      </LinearGradient>
      <LinearGradient
        id="g"
        x1={347.574}
        y1={204.708}
        x2={347.574}
        y2={212.537}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0.5} stopColor="#3F3D56" />
        <Stop offset={0.995} stopColor="#FF057D" />
      </LinearGradient>
      <LinearGradient
        id="h"
        x1={352.99}
        y1={197.307}
        x2={352.99}
        y2={205.022}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0.5} stopColor="#3F3D56" />
        <Stop offset={0.995} stopColor="#FF057D" />
      </LinearGradient>
      <LinearGradient
        id="i"
        x1={357.221}
        y1={189.488}
        x2={357.221}
        y2={196.592}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0.5} stopColor="#3F3D56" />
        <Stop offset={0.995} stopColor="#FF057D" />
      </LinearGradient>
      <LinearGradient
        id="j"
        x1={361.807}
        y1={181.48}
        x2={361.807}
        y2={188.767}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0.5} stopColor="#3F3D56" />
        <Stop offset={0.995} stopColor="#FF057D" />
      </LinearGradient>
      <LinearGradient
        id="k"
        x1={365.199}
        y1={172.241}
        x2={365.199}
        y2={181.4}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0.5} stopColor="#3F3D56" />
        <Stop offset={0.995} stopColor="#FF057D" />
      </LinearGradient>
      <LinearGradient
        id="l"
        x1={367.641}
        y1={163.695}
        x2={367.641}
        y2={172.451}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0.5} stopColor="#3F3D56" />
        <Stop offset={0.995} stopColor="#FF057D" />
      </LinearGradient>
      <LinearGradient
        id="m"
        x1={369.672}
        y1={153.341}
        x2={369.672}
        y2={164.665}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0.5} stopColor="#3F3D56" />
        <Stop offset={0.995} stopColor="#FF057D" />
      </LinearGradient>
      <LinearGradient
        id="n"
        x1={371.212}
        y1={143.844}
        x2={371.212}
        y2={156.43}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0.5} stopColor="#3F3D56" />
        <Stop offset={0.995} stopColor="#FF057D" />
      </LinearGradient>
      <LinearGradient
        id="o"
        x1={371.956}
        y1={134.859}
        x2={371.956}
        y2={147.447}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0.5} stopColor="#3F3D56" />
        <Stop offset={0.995} stopColor="#FF057D" />
      </LinearGradient>
      <LinearGradient
        id="p"
        x1={373.119}
        y1={125.975}
        x2={373.119}
        y2={137.479}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0.5} stopColor="#3F3D56" />
        <Stop offset={0.995} stopColor="#FF057D" />
      </LinearGradient>
      <LinearGradient
        id="q"
        x1={374.33}
        y1={116.076}
        x2={374.33}
        y2={128.266}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0.5} stopColor="#3F3D56" />
        <Stop offset={0.995} stopColor="#FF057D" />
      </LinearGradient>
      <LinearGradient
        id="r"
        x1={375.94}
        y1={106.788}
        x2={375.94}
        y2={118.511}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0.5} stopColor="#3F3D56" />
        <Stop offset={0.995} stopColor="#FF057D" />
      </LinearGradient>
      <LinearGradient
        id="s"
        x1={378.961}
        y1={94.461}
        x2={378.961}
        y2={111.854}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0.5} stopColor="#3F3D56" />
        <Stop offset={0.995} stopColor="#FF057D" />
      </LinearGradient>
      <LinearGradient
        id="t"
        x1={385.28}
        y1={83.132}
        x2={385.28}
        y2={99.16}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0.5} stopColor="#3F3D56" />
        <Stop offset={0.995} stopColor="#FF057D" />
      </LinearGradient>
      <LinearGradient
        id="u"
        x1={354.887}
        y1={210.821}
        x2={354.887}
        y2={219.602}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0.5} stopColor="#3F3D56" />
        <Stop offset={0.995} stopColor="#FF057D" />
      </LinearGradient>
      <LinearGradient
        id="v"
        x1={361.598}
        y1={202.916}
        x2={361.598}
        y2={212.775}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0.5} stopColor="#3F3D56" />
        <Stop offset={0.995} stopColor="#FF057D" />
      </LinearGradient>
      <LinearGradient
        id="w"
        x1={368.675}
        y1={195.196}
        x2={368.675}
        y2={201.698}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0.5} stopColor="#3F3D56" />
        <Stop offset={0.995} stopColor="#FF057D" />
      </LinearGradient>
      <LinearGradient
        id="x"
        x1={373.117}
        y1={186.733}
        x2={373.117}
        y2={192.905}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0.5} stopColor="#3F3D56" />
        <Stop offset={0.995} stopColor="#FF057D" />
      </LinearGradient>
      <LinearGradient
        id="y"
        x1={376.364}
        y1={177.252}
        x2={376.364}
        y2={183.226}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0.5} stopColor="#3F3D56" />
        <Stop offset={0.995} stopColor="#FF057D" />
      </LinearGradient>
      <LinearGradient
        id="z"
        x1={378.749}
        y1={167.875}
        x2={378.749}
        y2={174.022}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0.5} stopColor="#3F3D56" />
        <Stop offset={0.995} stopColor="#FF057D" />
      </LinearGradient>
      <LinearGradient
        id="A"
        x1={379.811}
        y1={155.527}
        x2={379.811}
        y2={164.493}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0.5} stopColor="#3F3D56" />
        <Stop offset={0.995} stopColor="#FF057D" />
      </LinearGradient>
      <LinearGradient
        id="B"
        x1={380.756}
        y1={145.426}
        x2={380.756}
        y2={156.385}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0.5} stopColor="#3F3D56" />
        <Stop offset={0.995} stopColor="#FF057D" />
      </LinearGradient>
      <LinearGradient
        id="C"
        x1={381.056}
        y1={136.818}
        x2={381.056}
        y2={146.826}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0.5} stopColor="#3F3D56" />
        <Stop offset={0.995} stopColor="#FF057D" />
      </LinearGradient>
      <LinearGradient
        id="D"
        x1={380.269}
        y1={126.095}
        x2={380.269}
        y2={137.318}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0.5} stopColor="#3F3D56" />
        <Stop offset={0.995} stopColor="#FF057D" />
      </LinearGradient>
      <LinearGradient
        id="E"
        x1={381.42}
        y1={117.592}
        x2={381.42}
        y2={128.119}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0.5} stopColor="#3F3D56" />
        <Stop offset={0.995} stopColor="#FF057D" />
      </LinearGradient>
      <LinearGradient
        id="F"
        x1={381.217}
        y1={108.167}
        x2={381.217}
        y2={119.184}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0.5} stopColor="#3F3D56" />
        <Stop offset={0.995} stopColor="#FF057D" />
      </LinearGradient>
      <LinearGradient
        id="G"
        x1={383.682}
        y1={96.587}
        x2={383.682}
        y2={111.336}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0.5} stopColor="#3F3D56" />
        <Stop offset={0.995} stopColor="#FF057D" />
      </LinearGradient>
      <LinearGradient
        id="H"
        x1={388.715}
        y1={87.968}
        x2={388.715}
        y2={98.707}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0.5} stopColor="#3F3D56" />
        <Stop offset={0.995} stopColor="#FF057D" />
      </LinearGradient>
      <LinearGradient
        id="I"
        x1={393.03}
        y1={82.192}
        x2={393.03}
        y2={92.605}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0.5} stopColor="#3F3D56" />
        <Stop offset={0.995} stopColor="#FF057D" />
      </LinearGradient>
      <LinearGradient
        id="J"
        x1={129.611}
        y1={103.557}
        x2={129.611}
        y2={156.378}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0.5} stopColor="#3F3D56" />
        <Stop offset={0.995} stopColor="#FF057D" />
      </LinearGradient>
      <LinearGradient
        id="K"
        x1={129.611}
        y1={96.011}
        x2={129.611}
        y2={163.924}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#3F3D56" />
        <Stop offset={0.995} stopColor="#FF057D" />
      </LinearGradient>
      <LinearGradient
        id="L"
        x1={186.035}
        y1={128.767}
        x2={186.035}
        y2={133.902}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0.5} stopColor="#3F3D56" />
        <Stop offset={0.995} stopColor="#FF057D" />
      </LinearGradient>
      <LinearGradient
        id="M"
        x1={193.238}
        y1={128.767}
        x2={193.238}
        y2={133.902}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0.5} stopColor="#3F3D56" />
        <Stop offset={0.995} stopColor="#FF057D" />
      </LinearGradient>
      <LinearGradient
        id="N"
        x1={200.441}
        y1={128.767}
        x2={200.441}
        y2={133.902}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0.5} stopColor="#3F3D56" />
        <Stop offset={0.995} stopColor="#FF057D" />
      </LinearGradient>
      <LinearGradient
        id="O"
        x1={207.644}
        y1={128.767}
        x2={207.644}
        y2={133.902}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0.5} stopColor="#3F3D56" />
        <Stop offset={0.995} stopColor="#FF057D" />
      </LinearGradient>
      <LinearGradient
        id="P"
        x1={214.847}
        y1={128.767}
        x2={214.847}
        y2={133.902}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0.5} stopColor="#3F3D56" />
        <Stop offset={0.995} stopColor="#FF057D" />
      </LinearGradient>
      <LinearGradient
        id="Q"
        x1={222.05}
        y1={128.767}
        x2={222.05}
        y2={133.902}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0.5} stopColor="#3F3D56" />
        <Stop offset={0.995} stopColor="#FF057D" />
      </LinearGradient>
      <LinearGradient
        id="R"
        x1={229.253}
        y1={128.767}
        x2={229.253}
        y2={133.902}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0.5} stopColor="#3F3D56" />
        <Stop offset={0.995} stopColor="#FF057D" />
      </LinearGradient>
      <LinearGradient
        id="S"
        x1={236.456}
        y1={128.767}
        x2={236.456}
        y2={133.902}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0.5} stopColor="#3F3D56" />
        <Stop offset={0.995} stopColor="#FF057D" />
      </LinearGradient>
      <LinearGradient
        id="T"
        x1={243.659}
        y1={128.767}
        x2={243.659}
        y2={133.902}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0.5} stopColor="#3F3D56" />
        <Stop offset={0.995} stopColor="#FF057D" />
      </LinearGradient>
      <LinearGradient
        id="U"
        x1={250.862}
        y1={128.767}
        x2={250.862}
        y2={133.902}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0.5} stopColor="#3F3D56" />
        <Stop offset={0.995} stopColor="#FF057D" />
      </LinearGradient>
      <LinearGradient
        id="V"
        x1={258.065}
        y1={128.767}
        x2={258.065}
        y2={133.902}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0.5} stopColor="#3F3D56" />
        <Stop offset={0.995} stopColor="#FF057D" />
      </LinearGradient>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h400v276.142H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)

export default SvgComponent