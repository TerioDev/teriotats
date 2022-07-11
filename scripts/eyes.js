if (screen.width >= 800) {
    var eyes = document.getElementById('eyes');
    var eye_l = document.getElementById('eye_l');
    var ball_l = document.getElementById('ball_l');
    var eye_r = document.getElementById('eye_r');
    var ball_r = document.getElementById('ball_r');

    let clamp = (num, min, max) => Math.min(Math.max(num, min), max);

    // Vector lenght
    function get_vec_len(vec) {
        return Math.sqrt(
            Math.pow(vec.x, 2) +
            Math.pow(vec.y, 2)
        );
    }

    // Direction vector normalized
    function dir_vec(start, end) {
        // console.log(start, end)
        let delta_x = end.x - start.x;
        let delta_y = end.y - start.y;
        let normalization_val = get_vec_len({ x: delta_x, y: delta_y });

        let x = delta_x / normalization_val;
        let y = delta_y / normalization_val;

        return {
            x: x,
            y: y,
        }
    }

    // A to B distance in 2D space
    function get_dist(eye_rect, mouseXY) {
        let center_x = eye_rect.x + eye_rect.width / 2;
        let center_y = eye_rect.y + eye_rect.height / 2;

        let distance_x = Math.abs(mouseXY.x - center_x) / (eye_rect.width / 2);
        let distance_y = Math.abs(mouseXY.y - center_y) / (eye_rect.height / 2);

        return { x: distance_x, y: distance_y };
    }

    function calc_eye_pos(eye_rect, mouseXY) {
        let center_x = eye_rect.x + eye_rect.width / 2;
        let center_y = eye_rect.y + eye_rect.height / 2;

        let direction = dir_vec(
            {
                x: center_x,
                y: center_y,
            },
            mouseXY
        );

        // < 0 - inside
        // = 0 - on edge
        // > 0 - outside
        let distance_x = Math.abs(mouseXY.x - center_x) / (eye_rect.width / 2);
        let distance_y = Math.abs(mouseXY.y - center_y) / (eye_rect.height / 2);

        let pos_x_0_1 = (direction.x * clamp(distance_x, 0, 1) + 1) / 2 * 100;
        let pos_y_0_1 = (direction.y * clamp(distance_y, 0, 1) + 1) / 2 * 100;

        return {
            // Wartosci ktore tutaj wpisalam pozwalaja na ustawienie jak daleko oko moze sie wychylic od srodka
            // dopasuj to wedle uznania
            x: clamp(pos_x_0_1, 25, 75),
            y: clamp(pos_y_0_1, 35, 65),
        }
    }

    // interpolacja to taka fajna funkcja ktora pozwala na plynne przejcia miedzy dwiema wartosciami :>
    function interpolate_vec(vec1, vec2, t) {
        return {
            x: vec1.x + (vec2.x - vec1.x) * t,
            y: vec1.y + (vec2.y - vec1.y) * t,
        }
    }

    document.onmousemove = function () {
        let eyes_rect = eyes.getBoundingClientRect();
        let l_rect = eye_l.getBoundingClientRect();
        let r_rect = eye_r.getBoundingClientRect();
        let e_xy = { x: event.clientX, y: event.clientY };

        let distances = get_dist(eyes_rect, e_xy);
        let distance = get_vec_len(distances);

        let l_pos = calc_eye_pos(l_rect, e_xy);
        let r_pos = calc_eye_pos(r_rect, e_xy);

        // 0.3 to offset jaki sobie wpisalam zeby to wygladalo lepiej, standardowo dopasuj sobie xd
        // jak ci sie podoba
        let final_l = interpolate_vec(l_pos, r_pos, clamp(distance + 0.3, 0, 1) / 2);
        let final_r = interpolate_vec(r_pos, l_pos, clamp(distance + 0.3, 0, 1) / 2);

        // Mozesz wlaczyc moja pierwsza iteracje algorytmu, zobacz co ci pasuje bardziej
        // also, alternatywna pozwala na tyle oczu ile chcesz
        let alternative = false;

        if (alternative) {
            final_l = l_pos;
            final_r = r_pos;
        }

        ball_l.style.left = final_l.x + '%';
        ball_l.style.top = final_l.y + '%';

        ball_r.style.left = final_r.x + '%';
        ball_r.style.top = final_r.y + '%';
    }
}